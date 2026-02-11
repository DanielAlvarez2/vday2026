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

    <div class='item'>
      <div class='left'>
        <span class='name'>burrata</span>
        <span class='allergies'>(d)</span>
        <span class='description'>
          peach conserva, balsamic
        </span><br/>

        <span class='name'>cod fish mousse</span>
        <span class='allergies'>(gl.d)</span>
        <span class='description'>
          puffed pastry
        </span><br/>

        <span class='name'>jamón Ibérico</span>
        <span class='allergies'>(gl)</span>
        <span class='description'>
          panipuri
        </span><br/>

        <div class='wine'>
          Xarel lo, Macabeu, Parellada, Monastrell, <span class='wine-name'>De Nit</span>, 
          2022, Raventós i Blanc, Conca del Riu Anoia
        </div>
      </div>  
      <div class='right'></div>
    </div>




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
        <span class='name'>wagyu bone-in beef short ribs</span>
        <span class='allergies'>(d)</span>
        <span class='description'>
          potato fondant, broccolini, tomatoes, sweet piquillo pepper, 
          ginger-beer-soy sauce
        </span>

        <div class='wine'>
          Garnatxa, Merlot, Syrah, <span class='wine-name'>Ceps Nous</span>, 2016, Pasanau, Priorat
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>duck confit</span>
        <span class='allergies'>(d.gl)</span>
        <span class='description'>
          creamy farro, sweet potato, artichokes, mushrooms, lavender-citrus gastrique
        </span>

        <div class='wine'>
          Tempranillo, <span class='wine-name'>Portia</span>, Crianza, 2016, Ribera del Duero
        </div>
      </div>  
      <div class='right'></div>
    </div>

<h1>desserts</h1>

    <div class='item'>
      <div class='left'>
        <span class='name'>chocolate temptation</span>
        <span class='allergies'>(d.gl.n)</span>
        <span class='description'>
          hazelnut sablé, vanilla-almond sponge cake, hazelnut crémeux, cinnamon 
          nougatine, chocolate profiterole
        </span>

        <div class='wine'>
          Furmint, field blend, <span class='wine-name'>Oremus</span>, 2018, 3 Puttonyos, Tempos Vega Sicilia, Tokaji Aszú
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>sweet rose</span>
        <span class='allergies'>(d.gl.n)</span>
        <span class='description'>
          white chocolate mousse, hazelnut brittle, berries compote, 
          olive oil-poppy seed sponge cake, almond streusel, rose cloud
        </span>

        <div class='wine'>
          Field Blend, <span class='wine-name'>10 Years Tawny Port</span>, Noval
        </div>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>Carribean</span>
        <span class='allergies'>(vegan)</span>
        <span class='description'>
          pineapple rum flambé, virgin piña colada ice cream, 
          pineapple-lime sponge cake, bittersweet chocolate
        </span>

        <div class='wine'>
          Moscatel, Jorge Ordoñez, <span class='wine-name'>Selección Especial</span>, 2022, Málaga
        </div>
      </div>  
      <div class='right'></div>
    </div>


  </div>
`

setupCounter(document.querySelector('#counter'))
