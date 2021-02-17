exports.getIndex = (req, res) => {
    res.render('user/index', {
        title: 'Anasayfa', 
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
