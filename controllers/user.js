exports.getIndex = (req, res) => {
    res.render('user/index', {
        title: 'Onurhan | Home', 
        path: '/'
        });
}

exports.getAbout = (req, res) => {
    res.render('user/about', {
        title: 'Onurhan | About Me', 
        path: '/'
        });
}

exports.getContact = (req, res) => {
    res.render('user/contact', {
        title: 'Onurhan | Contact', 
        path: '/'
        });
}

exports.getLogin = (req, res) => {
    res.render('user/login', {
        title: 'Admin Panel | Login', 
        path: '/'
        });
}
