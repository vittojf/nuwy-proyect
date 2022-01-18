const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const multer = require("multer"); 
const fs = require('fs')




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {

  // Dominio que tengan acceso (ej. 'http://example.com')
     res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Metodos de solicitud que deseas permitir
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
  // Encabecedados que permites (ej. 'X-Requested-With,content-type')
     res.setHeader('Access-Control-Allow-Headers', '*');
  
  next();
  })
app.use(cors());

const transport = nodemailer.createTransport(smtpTransport({
  service: "gmail",
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
}));
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

transport.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const storage = multer.diskStorage({
  destination: path.join(__dirname, './public_html/', 'uploads'),
  filename: function (req, file, cb) {   
      // null as first argument means no error
      cb(null,file.originalname )  
  }
})

app.post('/imageupload', async (req, res,next) => {	
  try {
      // 'avatar' is the name of our file input field in the HTML form

      let upload = multer({ storage: storage}).single('avatar');
    
      upload(req, res, function(err) {
          // req.file contains information of uploaded file
          // req.body contains information of text fields
  //console.log(res)

          if (!req.file) {
           
            return res.send(res);
          }
          else if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
          }
          else if (err) {
            return res.status(500).json(err)
          }
  
return res.status(200).send(req.file)
    
          
        }); 
      
    //  return res;
  }catch (err) {
    return res.status(500).send(err)
  }
})

app.post("/send-mail", cors(), async (req, res,next) => {

    let body =  req.body;
   
  
try{

  let mailOptions = {
    from: process.env.EMAIL,
    to:body.DatosUsuario.email,
    subject: `${body.DatosUsuario.name}, haz realizado una transferencia con Nuwy`,
    template: "index",
    context: body

  };

  await transport.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(500)
      throw (err);
    } 
  });
}catch(err){
  res.json(err);
}

try{
  var imagePath = path.join(__dirname, '/public_html/uploads/'+body.DatosCaptura.fileName);
  let mailOptionsNuwy = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Han realizado una transferencia",
    template: "nuwySend",
    context: body,
    attachments : [{
      filename:body.DatosCaptura.fileName ,
      path:imagePath,        
      
    }]
  };

  await transport.sendMail(mailOptionsNuwy, (err, data) => {
    if (err) {
      fs.unlinkSync(imagePath)
      res.status(500)
      throw (err);
      
    } else {
      fs.unlinkSync(imagePath)
      return res.status(200).send('Correo Enviado!')
    }
  })
  
}catch(err){
  res.json(err);
}
  
  

});
app.post("/send-mail-contact", async (req, res,next) => {

  try{
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Han realizado una Pregunta`,
      html: `<h5 style="font-size:15px">Recibiste un mensaje de:</h5>
    
     <p style="font-size:15px"><b> Email :</b> ${req.body.email}</p>
     
      <p style="font-size:15px"><b> Name:</b> ${req.body.name}</p>
   
      <p style="font-size:15px"><b>Message:</b> ${req.body.message}</p>`,
    };
    await transport.sendMail(mailOptions, (err, data) => {
      if (err) {
        
        res.status(500)
        throw (err);
    } else {
      return res.status(200).send('Correo Enviado!')
      
    }
  })
}catch (error) {
  res.json(error);
}

});


app.listen(process.env.PORT||80 , (req,res) => {
  console.log("server activo");
});

//
/*
PASSWORD=Dantestriffe2021**
EMAIL=djimeneztaq@gmail.com
PORT=4000

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
