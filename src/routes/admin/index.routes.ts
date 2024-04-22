import express from 'express';
import adminRoutes from './admin.routes';
import productRoutes from './product.routes';
import cartRoutes from './cart.routes';
import reviewRoutes from './review.routes';
import wishlistRoutes from './wishlist.routes';

const adminsRoutes = express.Router();

adminsRoutes.use('/admin', adminRoutes);
adminsRoutes.use('/product', productRoutes);
adminsRoutes.use('/cart', cartRoutes);
adminsRoutes.use('/review', reviewRoutes);
adminsRoutes.use('/wishlist', wishlistRoutes);


export default adminsRoutes;