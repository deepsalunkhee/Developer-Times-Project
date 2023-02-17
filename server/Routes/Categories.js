const express =require('express');
const router =express.Router();
require('dotenv').config();
const KEY_API = "5c0c53f789b24f72a8a381768c93c0c4";



router.get('/headline',async (req,res)=>{
    try {
        const { default: fetch } = await import('node-fetch');
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${KEY_API}`);
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
})

router.get('/sport',async (req,res)=>{
    try {
        const { default: fetch } = await import('node-fetch');
        const response = await fetch(`https://newsapi.org/v2/everything?q=sports&apiKey=${KEY_API}`);
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
})

router.get('/tech',async (req,res)=>{
    try {
        const { default: fetch } = await import('node-fetch');
        const response = await fetch(`https://newsapi.org/v2/everything?q=tech&apiKey=${KEY_API}`);
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
})

router.get('/science',async (req,res)=>{
    try {
        const { default: fetch } = await import('node-fetch');
        const response = await fetch(`https://newsapi.org/v2/everything?q=science&apiKey=${KEY_API}`);
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
})


router.get('/health',async (req,res)=>{
    try {
        const { default: fetch } = await import('node-fetch');
        const response = await fetch(`https://newsapi.org/v2/everything?q=health&apiKey=${KEY_API}`);
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
})


router.get('/movies',async (req,res)=>{
    try {
        const { default: fetch } = await import('node-fetch');
        const response = await fetch(`https://newsapi.org/v2/everything?q=movies&apiKey=${KEY_API}`);
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
})


router.get('/engineering',async (req,res)=>{
    try {
        const { default: fetch } = await import('node-fetch');
        const response = await fetch(`https://newsapi.org/v2/everything?q=engineering&apiKey=${KEY_API}`);
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
})




module.exports=router;