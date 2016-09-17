
export default function() {
  this.namespace = '/api';
  this.get('/spies', function() {
    return {
      data: [{
        type: 'spy',
        id: 'cicla001',
        attributes: {
          name: 'GIANT',
          city: 'Medellín',
          type: 'crono',
          image: 'http://www.giant.cl/_images/thumbnails_800/prod_1571_img_2522.jpg'
        }
      }, {
        type: 'spy',
        id: 'cicla002',
        attributes: {
          name: 'CAÑON',
          city: 'Madrid',
          type: 'ruta',
          image: 'http://www.movistarteam.com/assets/img/bike/ultimate/ultimate_01.jpg'
        }
      }, {
        type: 'spy',
        id: 'cicla003',
        attributes: {
          name: 'scoot',
          city: 'Valle',
          type: 'montaña',
          image: 'http://2.bp.blogspot.com/-q4H0HmkuRGc/VdV7w7JhUFI/AAAAAAAAV6U/T630rlNNg44/s1600/scott-scale-genius-plus-2016.jpg'
        }
      }]
    };
  });


}