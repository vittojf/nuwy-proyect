const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const multer = require("multer"); 
const fs = require('fs')
const log = console.log;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
app.use(cors());

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
transport.use(
  "compile",
  hbs({
    viewEngine: {
      extname: ".handlebars",
      partialsDir: path.resolve("./views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
  })
);

const storage = multer.diskStorage({
  destination: path.join(__dirname, './public_html/', 'uploads'),
  filename: function (req, file, cb) {   
      // null as first argument means no error
      cb(null,file.originalname )  
  }
})

app.post('/imageupload', async (req, res) => {	
  try {
      // 'avatar' is the name of our file input field in the HTML form

      let upload = multer({ storage: storage}).single('avatar');

      upload(req, res, function(err) {
          // req.file contains information of uploaded file
          // req.body contains information of text fields

          if (!req.file) {
            //  return res.send('Please select an image to upload');
            log(req)
          }
          else if (err instanceof multer.MulterError) {
              return res.send(err);
          }
          else if (err) {
              return res.send(err);
          }
  

    

      }); 

  }catch (err) {console.log(err)}
})

app.post("/send-mail", cors(), async (req, res) => {
  let body = req.body;
  var imagePath = path.join(__dirname, '/public_html/uploads/'+body.DatosCaptura.fileName);
  let mailOptions = {
    from: process.env.EMAIL,
    to:body.DatosUsuario.email,
    subject: `${body.DatosUsuario.name}, haz realizado una transferencia con Nuwy`,
    template: "index",
    context: body

  };

  let mailOptionsNuwy = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Han realizado una transferencia",
    template: "nuwySend",
    context: body,
    attachments : [{
      filename: "Header@3x.png",
      path:imagePath,        

}]
  };


  await transport.sendMail(mailOptions, (err, data) => {
    if (err) {
      return log("Error", err);
    } else {
      return log("Correo enviado");
    }
  });
  await transport.sendMail(mailOptionsNuwy, (err, data) => {
    if (err) {
      return log("Error", err);
    } else {
      fs.unlinkSync(path)
      return log("Correo enviado");
    }
  });

});

app.listen(process.env.PORT || 3100, () => {
  console.log("server activo");
});

//
/*


//step 1

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})
,
    (err, data) => {
      if (err) {
        console.log("Error: ", err);
      } else {
        console.log("CORREO ENVIADO",body);
      }
    }
//step 2

//step 3

transporter.sendMail(mailOptions,(err,data) =>{
    if(err){
        console.log('Error: ', err)
    }else{
        console.log('Correo enviado')
    }
})*/
