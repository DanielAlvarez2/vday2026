import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div style='
              // background:#ddd;
              width:5in;
              
              padding-left:0px;
              padding-top:0px;
              padding-right:0px;
              border:1px solid red;
              height:8in';>



    <div class='item'>
      <div class='left'>
        <span class='name'>burrata</span>
        <span class='allergies'>(D)</span>
        <span class='description'>
          peach conserva, balsamic glaze
        </span><br/>

        <span class='name'>cod fish mousse</span>
        <span class='allergies'>(gl.D)</span>
        <span class='description'>
          puffed pastry
        </span><br/>

        <span class='name'>jamón Ibérico</span>
        <span class='allergies'>(gl)</span>
        <span class='description'>
          panipuri
        </span><br/>

        <div class='wine'>
          Xarel-lo, Macabeu, Parellada, Monastrell, <span class='wine-name'>de Nit Rosé</span>, 
          2023, Raventós i Blanc, Conca del Riu Anoia, Penedès
        </div>
        
      </div>
    </div>





    <div class='item'>
      <div class='left'>      
        <span class='name'>goat cheese panna cotta</span>
        <span class='allergies'>(d.n.vegetarian)</span>
        <span class='description'>organic mixed lettuce, beets gelée, 
        balsamic pearls, hazelnut crumble, champagne vinaigrette</span>
        
        <div class='wine'>
          Sauvignon Blanc, 
          <span class='wine-name'>Vielles Vignes</span>, 
          2024, Jean-Marc et Romain Pastou, Sancerre, Loire Valley, France
        </div>
      </div>
      <div class='right'>
      </div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>mushroom velouté</span>
        <span class='allergies'>(D.gl.vegetarian)</span>
        <span class='description'>organic mushrooms(shiitake, oyster, brown beech), 
        Manchego cheese foam, black truffle, toast</span>
        
        <div class='wine'>
          Palomino, 
          <span class='wine-name'>Emperatriz Eugenia</span>, 
          Very Rare Oloroso, Lustau
        </div>
      </div>  
      <div class='right'>
      </div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>smoked salmon</span>
        <span class='allergies'>(d)</span>
        <span class='description'>
          crème fraîche, mint, cucumber, beets, dill vinaigrette, 
          avocado purée, gooseberries</span>
        
        <div class='wine'>
          Viura, 
          <span class='wine-name'>Millenium Brut</span>, 
          n.v., Bodegas Ondarre, Valle del Ebro
        </div>
      </div>  
      <div class='right'>
        
      </div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>pasta and lamb ragù</span>
        <span class='allergies'>(d.GL)</span>
        <span class='description'>
          fresh fusilli pasta, lamb shank ragù, Parmesan cheese foam, truffle dust
        </span>
        
        <div class='wine'>
          Tempranillo, 
          <span class='wine-name'>La Planta</span>, 
          2023, Ribera del Duero
        </div>
      </div>  
      <div class='right'>
    
      </div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>foie gras</span>
        <span class='allergies'>(d.gl.alcohol)</span>
        <span class='description'>
          grade A, green apple, membrillo, vanilla, Pedro Ximenez reduction, toast
        </span>

        <div class='wine'>
          Sémillon, 
          <span class='wine-name'>Cyprès de climens</span>, 
          2016, Barsac, Sauternes
        </div>
      </div>  
      <div class='right'>
      </div>
    </div>


















<div style='background:#ccc;'>

    <div class='item'>
      <div class='left'>
        <span class='name'>polenta and vegetables</span>
        <span class='allergies'>(d.n.vegetarian)</span>
        <span class='description'>
          creamy polenta, seasonal vegetables, red bell pepper foam, hazelnuts, 
          Parmesan cheese
        </span>

        <div class='wine'>
          Tibouren, Grenache, 
          <span class='wine-name'>Cuvée Spéciale Tibouren</span>, 
          2022, Clos Cibonne, Côtes de Provence
        </div>
      </div>  
      <div class='right'>
      </div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>Mediterranean sea bass</span>
        <span class='allergies'></span>
        <span class='description'>
          saffron potatoes, green peas, 
          piperrada (bell peppers, onions, paprika, tomato)
        </span>

        <div class='wine'>
          Furmint, 
          <span class='wine-name'>Mandolás</span>, 
          2021, Oremus, Tempos Vega Sicilia, Tokaj, Hungary
        </div>
      </div>  
      <div class='right'>
      
      </div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>shellfish</span>
        <span class='allergies'>(D.PORK)</span>
        <span class='description'>
          shrimp, mussels, clams, bay scallops, bacon, fingerling potatoes, celery, 
          carrots, cauliflower, light seafood broth
        </span>

        <div class='wine'>
          Albariño, 
          <span class='wine-name'>Val de Meigas</span>, 
          2024, Rías Baixas
        </div>
      </div>  
      <div class='right'>
        
      </div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>wagyu bone-in beef short ribs</span>
        <span class='allergies'>(d.GL)</span>
        <span class='description'>
          potato fondant, broccolini, tomatoes, sweet piquillo pepper, 
          ginger-beer-soy sauce
        </span>

        <div class='wine'>
          Tempranillo, 
          <span class='wine-name'>El Pedrosal</span>, 
          Crianza, 2021, Bodegas Hnos. Pérez Pascuas, Ribera del Duero
        </div>
      </div>  
      <div class='right'>
      </div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>duck leg confit</span>
        <span class='allergies'>(d.gl)</span>
        <span class='description'>
          creamy farro, sweet potato purée, artichokes, organic brown beech mushrooms, 
          lavender-citrus gastrique
        </span>

        <div class='wine'>
          Tempranillo, Gar., Maz., Gra., 
          <span class='wine-name'>Cerro Añon</span>, 
          Gran Reserva, 2018, Bodegas Olarra, Rioja
        </div>
      </div>  
      <div class='right'>
          
      </div>
    </div>



</div>




















    <div class='item'>
      <div class='left'>
        <span class='name'>chocolate temptation</span>
        <span class='allergies'>(D.gl.N)</span>
        <span class='description'>
          hazelnut-cocoa sablé, orange-almond sponge cake, hazelnut crémeux, cinnamon 
          nougatine, pastry cream profiterole
        </span>

        <div class='wine'>
          Field blend, 
          <span class='wine-name'>10 Year Tawny Port</span>, 
          Noval
        </div>
      </div>  
      <div class='right'>
      
      </div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>sweet rose</span>
        <span class='allergies'>(D.gl.N)</span>
        <span class='description'>
          white chocolate mousse, hazelnut brittle, berries compote, 
          olive oil-poppy seed sponge cake, almond streusel
        </span>

        <div class='wine'>
          Moscatel, 
          <span class='wine-name'>Selección Especial</span>, 
          2023, Jorge Ordoñez, Málaga
        </div>
      </div>  
      <div class='right'>
        
      </div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>Pineapple Breeze</span>
        <span class='allergies'></span>
        <span class='description'>
          (non-alcoholic); fresh pineapple, fresh lemon juice, mint, lavender syrup
        </span>
          <span class='wine-name'>11</span>
      </div>  
      <div class='right'></div>
    </div>

    <div class='item'>
      <div class='left'>
        <span class='name'>Love Potion</span>
        <span class='allergies'></span>
        <span class='description'>
          Mezcal, Tequila, Strega, Aperol, fresh lime juice
        </span>
          <span class='wine-name'>17</span>
      </div>  
      <div class='right'></div>
    </div>


  </div>
`

setupCounter(document.querySelector('#counter'))
