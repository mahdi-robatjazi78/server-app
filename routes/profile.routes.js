import express from 'express'
const Router = express.Router()


Router.get('/' , (req,res)=>{
  res.json({name:"mahdi" , family:"robatjazi"})
})


export default Router