
const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'https://i.pinimg.com/originals/0f/62/0b/0f620b84059a4e502d0824f7c45ce280.gif',
  weapon: ['katana', 'knife'],
  attack: function(){
    console.log(this.name + ' ' + 'Fight...')
  }
}

const player2 = {
  name: 'Kitana',
  hp: 50,
  img: 'https://i.gifer.com/origin/1d/1dc22a15c64cfdd7073b7a9b967f693b.gif',
  weapon: ['machette', 'syurikeni'], // da da syurikeni
  attack: function(){
    console.log(this.name + ' ' + 'Fight...')
  }
}

player1.attack();
player2.attack();

function createPlayer(player, playerName){
  
  const $player = document.createElement('div');
  $player.classList.add(player);
  
  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  
  const $character = document.createElement('div');
  $character.classList.add('character');
  
  const $life = document.createElement('div');
  $life.classList.add('life')
  $life.style.width = playerName.hp + '%';
  
  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText= playerName.name;
  
  const $img = document.createElement('img');
  $img.src= playerName.img;
  
  
  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  
  
 
}

createPlayer('player1', player1);
createPlayer('player2', player2);



