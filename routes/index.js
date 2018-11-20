module.exports = (app, passport) => {

    var card = require("../models/card.js");
    var user = require("../models/user.js")

    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/login', (req, res) => {
        res.render('login', {
            message: req.flash('loginMessage')
        });
    });

    app.post('/login', passport.authenticate('local-login', {
            successRedirect: '/profile',
            failureRedirect: '/login',
            failureFlash: true
        }),
        (req, res) => {
            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
                req.session.cookie.expires = false;
            }
            res.redirect('/');
        });

    app.get('/signup', (req, res) => {
        res.render('signup', {
            message: req.flash('signupMessage')
        });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/profile', isLoggedIn, function (req, res) {
        card.all((data) => {
            console.log(data)
            const cards = data
            const user = req.user
            const checkUserMatch = () => {
                for (var i = 0; i < cards.length; i++) {
                    const cardUser = cards[i].username
                    const staticUser = user
                    console.log(`card user ${cardUser}`)
                    console.log(`static user ${staticUser}`)
                    if (cardUser === staticUser) {
                        console.log(cards[i].title)
                        return true
                    } else {
                        return false
                    }
                }
            }
            res.render('profile', {
                user: user,
                cards: cards,
                hasCards: cards.length > 0,
                allUsers: [],
                checkUserMatch: checkUserMatch()
            })
        })
    });

    app.get('/api/cards', (req, res) => {
        card.all((data) => {
            var hbsObject = {cards:data}
            res.json(hbsObject)
        })
    })

    app.get('/api/users', (req, res) => {
        user.all((data) => {
            var hbsObject = {allUsers:data}
            res.json(hbsObject)
        })
    })

    app.post('/api/cards/create', (req, res, next) => {
        console.log(req.body);
        card.create([
            'type', 'title', 'notes', 'category', 'difficult', 'important', 'deadline', 'deadlineDate', 'streak', 'username'
        ], [
            req.body.type, req.body.title, req.body.notes, req.body.category, req.body.difficult, req.body.important, req.body.deadline, req.body.deadlineDate, req.body.streak, req.body.username
        ], (result) => {
            res.render('/profile')
            console.log(result)
        }) 
    })

    app.delete('api/cards/delete/:id', (req, res) => {
        const condition = "id = " + req.params.id;
        card.delete(condition, function(result) {
            console.log(result)
        })
        res.redirect('/profile')
    })

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}