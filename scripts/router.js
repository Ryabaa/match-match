import Navigo from 'navigo'; 

const router = new Navigo('/');

router.on('/settings', function () {
    console.log(1);
});

router.resolve();

//router.navigate('/about');