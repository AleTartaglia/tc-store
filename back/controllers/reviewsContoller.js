const { Product, Review } = require("../db/models")

const reviewsController = {
    createReview(req, res) {
        Product.findById(req.body.productId)
            .then(product => {
                Review.create(
                    {
                        user: req.user._id,
                        rating: req.body.rating,
                        description: req.body.description,
                    },
                )
                    .then(review => {
                        product.reviews.push(review)
                        product.save()
                        res.status(201).send(product)
                    })
            })
            .catch(err => res.status(404).send(err))
        }
}

module.exports = reviewsController;
