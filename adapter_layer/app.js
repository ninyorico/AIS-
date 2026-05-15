    import express from "express";
    import 'dotenv/config.js';

    const app = express();

    import authRoutes from "../adapter_layer/routes/authRoutes.js"; 

    app.use(express.json());

    app.use((req, res, next) => {
        console.log(req.path,req.method);
        next();
    })



    app.use('/auth', authRoutes);

    try {
        app.listen(process.env.PORT || 3001, () => {
            console.log(`listening to port:${process.env.PORT || 3001}...`);
        });
    } catch(e) {
        console.log(e);
    }
    /*app.use((req, res) => {
        res.status(404).json({success: false, message: "No such endpoint exist"})
    });*/