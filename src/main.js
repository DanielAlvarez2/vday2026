import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div style='background:#ddd;
              width:14in;
              border:1px solid black;
              height:8.5in';>
    <h1>trio of tapas</h1>

    <h1>appetizers</h1>

    <div class='item'>
      <div class='left'>      
        <span class='name'>goat cheese panna cotta</span>
        <span class='allergies'>(d.n.vegetarian)</span>
        <span class='description'>organic mixed lettuce, beets gelée, 
        balsamic pearls, hazelnut crumble, champagne vinaigrette</span>
        
        <div class='wine'>
          Hondarrabi Zuri, Hondarrabi Beltza, <span class='wine-name'>Rubentis</span>, 2023, Ameztoi, Getariako Txakolina
        </div>
      </div>
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>mushroom velouté</span>
        <span class='allergies'>(d.gl.vegetarian)</span>
        <span class='description'>organic mushrooms, Manchego cheese foam, black truffle,
        toast</span>
        
        <div class='wine'>
          Hondarrabi Zuri, <span class='wine-name'>Ameztoi</span>, 2023, Getariako Txakolina
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>smoked salmon</span>
        <span class='allergies'>(d.gl)</span>
        <span class='description'>crème fraîche, cucumber, beets, dill vinaigrette, avocado</span>
        
        <div class='wine'>
          Albariño, <span class='wine-name'>Val de Meigas</span>, 2023, Rías Baixas
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>lamb ragù</span>
        <span class='allergies'>(d)</span>
        <span class='description'>fresh fusilli pasta, lamb shank, Parmesan cheese foam, truffle dust</span>
        
        <div class='wine'>
          Tempranillo, Gar., Maz., Gra., <span class='wine-name'>Cerro Añon</span>, Gran Reserva, 2016, Bodegas Olarra, Rioja
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>foie gras</span>
        <span class='allergies'>(d.gl)</span>
        <span class='description'>grade A, green apple, membrillo, vanilla, Pedro Ximenez reduction, toast</span>

        <div class='wine'>
          Sémillon, <span class='wine-name'>Cyprès de climens</span>, 2016, Barsac, Sauternes
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <h1>entrées</h1>

    <div class='item'>
      <div class='left'>
        <span class='name'>polenta and vegetables</span>
        <span class='allergies'>(d.vegetarian)</span>
        <span class='description'>
          creamy polenta, seasonal vegetables, red bell pepper foam, hazelnuts, Parmesan cheese
        </span>

        <div class='wine'>
          Garnatxa, Samsó, Cabernet Sauvignon, Syrah, <span class='wine-name'>Nita</span>, 2020, Meritxell Pallejà, Priorat
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>Mediterranean sea bass</span>
        <span class='allergies'>(d)</span>
        <span class='description'>
          saffron potatoes, piperrada (bell peppers, onions, paprika, tomato)
        </span>

        <div class='wine'>
          Albariño, <span class='wine-name'>Palacio de Fefiñanes</span>, 2023, Rías Baixas
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>shellfish</span>
        <span class='allergies'>(d)</span>
        <span class='description'>
          shrimp, mussels, clams, bay scallops, bacon, fingerling potatoes, celery, 
          carrots, cauliflower, light seafood broth
        </span>

        <div class='wine'>
          Xarel lo, <span class='wine-name'>Gres</span>, 2023, Anima Mundi, Catalunya
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'></span>
        <span class='allergies'></span>
        <span class='description'></span>

        <div class='wine'>
          <span class='wine-name'></span>
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'></span>
        <span class='allergies'></span>
        <span class='description'></span>

        <div class='wine'>
          <span class='wine-name'></span>
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'></span>
        <span class='allergies'></span>
        <span class='description'></span>

        <div class='wine'>
          <span class='wine-name'></span>
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'></span>
        <span class='allergies'></span>
        <span class='description'></span>

        <div class='wine'>
          <span class='wine-name'></span>
        </div>
      </div>  
      <div class='right'></div>
    </div>


  </div>
`

setupCounter(document.querySelector('#counter'))
