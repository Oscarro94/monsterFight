
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE=20;

const enteredValue = prompt('Maximun life for you and the monster.', '100');

let chosenMaxLife = parseInt(enteredValue);

if(isNaN(chosenMaxLife) || chosenMaxLife <=0){
  alert("You didn't introduce a number so, it will be assigned 100")
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife= true;

adjustHealthBars(chosenMaxLife);

function reset(){
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life saved you!');
  }

  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
    alert('Oh yeaaaah, You won, you are the best of the world!!')
  }else if(currentPlayerHealth <=0 && currentMonsterHealth > 0){
    alert('Oh noo,You lost!! :(')
  }else if(currentPlayerHealth <=0 && currentMonsterHealth <=0){
    alert('You have a draw!!');
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function strongAttackHandler(){
  const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life saved you!');
  }

  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
    alert('Oh yeaaaah, You won, you are the best of the world!!')
  }else if(currentPlayerHealth <=0 && currentMonsterHealth > 0){
    alert('Oh noo,You lost!! :(')
  }else if(currentPlayerHealth <=0 && currentMonsterHealth <=0){
    alert('You have a draw!!');
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function healPlayerHandler(){
  let healvalue;

  if(currentPlayerHealth >- chosenMaxLife - HEAL_VALUE){
    alert("You can't heal more than your max initial health.")
    healvalue = chosenMaxLife - currentPlayerHealth;
  }else{
    healvalue = HEAL_VALUE;
  }
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE;

  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life saved you!');
  }  

  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
    alert('Oh yeaaaah, You won, you are the best of the world!!')
  }else if(currentPlayerHealth <=0 && currentMonsterHealth > 0){
    alert('Oh noo,You lost!! :(')
  }else if(currentPlayerHealth <=0 && currentMonsterHealth <=0){
    alert('You have a draw!!');
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);