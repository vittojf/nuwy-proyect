const express = require("express");

const app = express();
require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const log = console.log;
const path = require("path");
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

app.post("/send-mail", cors(), async (req, res) => {
  // let body = req.body;

  let mailOptions = {
    from: "vittoriano@bloomcker.io",
    to: "vittodeveloper@gmail.com",
    subject: "TESTING MAIL DESDE UN ENDPOINT",
    template: "index",
    context: {
      body: {
        dataSendMoney: {
          emisor: {
            country: "CLP",
            value: 1,
          },
          receptor: {
            country: "COP",
            value: 4.721,
          }
        },
          DatosUsuario: {
            email: "eee",
            rut: "25.814.996-3",
            name: "222",
          },
          DatosReceptor: {
            tipoCuenta: "Corriente",
            name: "vittoriano",
            dni: "15685",
            email: "qwe",
            banco: "value2",
            nCuenta: "32151",
          },
          DatosCaptura: {},
          rate:4.66 
      }
    },
  };

  let mailOptionsNuwy = {
    from: "vittoriano@bloomcker.io",
    to: "vittoriano@bloomcker.io",
    subject: "TESTING MAIL DESDE UN ENDPOINT",
    template: "nuwySend",
    context: {
      body: {
        dataSendMoney: {
          emisor: {
            country: "CLP",
            value: 1,
          },
          receptor: {
            country: "COP",
            value: 4.721,
          }
        },
          DatosUsuario: {
            email: "eee",
            rut: "25.814.996-3",
            name: "222",
          },
          DatosReceptor: {
            tipoCuenta: "Corriente",
            name: "vittoriano",
            dni: "15685",
            email: "qwe",
            banco: "value2",
            nCuenta: "32151",
          },
          DatosCaptura: {},
          rate:4.66 
      }
    },
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
      return log("Correo enviado");
    }
  });

});

app.listen(process.env.PORT || 4000, () => {
  console.log("server activo en el puerto : 4000");
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
