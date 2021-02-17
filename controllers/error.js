module.exports.get404Page = (req, res) => {
    res.render('404.pug', {title: 'Sayfa Bulunamadı - 404'});
}