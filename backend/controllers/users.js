import User from "../models/users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {

  try {
     // kullanıcı bilgilerini al
    const { firstName, lastName, email, password } = req.body;

     // email ve password girilmiş mi kontrolü
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("Tüm alanlar zorunludur");
    }

 
    const oldUser = await User.findOne({ email });

  // kullanıcının veritabanında kayıtlı olma kontrolü
    if (oldUser) {
      return res.status(409).send("Kullanıcı zaten var.Lütfen giriş yapın");
    }

    //şifreyi şifrele
    let encryptedPassword = await bcrypt.hash(password, 10);

    // veritabanında kullanıcı oluştur
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // tokeni oluştur
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // tokeni kaydet
    user.token = token;
    await user.save();

    // yeni kullanıcıyı responseda döndür
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    // kullanıcı bilgilerini al
    const { email, password } = req.body;

    // email ve password girilmiş mi kontrolü
    if (!(email && password)) {
      res.status(400).send("Tüm alanlar zorunludur");
    }
    // kullanıcının veritabanında kayıtlı olma kontrolü
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Token oluşturma
      const token = jwt.sign(
        {
          user_id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // tokeni kaydet
      user.token = token;

      await user.save();
      res.status(200).json(user);
    } else {
      res.status(400).json({
        message: "Kullanıcı bulunamadı",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};
