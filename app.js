// 1. feladat
// 2 megoldást találtam, az alábbiak:

console.log('---1. feladat---');

const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti'];

// 1. megoldás:
console.log('Megoldás1:');
function gaborCheck() {
  // A ciklus csak akkor ad új értéket a valasz változónak, ha talált Gábort. Az új érték: 'Van benne Gábor, a ' + (i + 1) + '-ik elem'.
  let valasz = 'Nincs Gábor';
  for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Gábor') {
      valasz = 'Van benne Gábor, a ' + (i + 1) + '-ik elem';
    }
  }
  return valasz;
}

console.log(gaborCheck());

// 2. megoldás:
console.log('Megoldás2:');
function gaborCheckWhile() {
  let i = 0;
  let valasz = '';
  while ((names[i] !== 'Gábor') && (i < names.length)) {
    i++;
  }
  if (names[i] === 'Gábor') {
    valasz = 'Van benne Gábor, a ' + (i + 1) + '-ik elem';
  }
  else {
    valasz = 'Nincs Gábor';
  }
  return valasz;
}

console.log(gaborCheckWhile());


// 2. feladat

console.log('---2. feladat---');

// Betettem a következő függvényekbe a nums tömböt, mert a 3. és 4. feladat is nums tömbbel dolgozik, így nem definiálom felül az előzőeket

function osszeadas() {
  const nums = [4, 2, 2, 1, 1];
  let osszegvaltozo = 0;
  for (let i = 0; i < nums.length; i++) {
    osszegvaltozo = osszegvaltozo + nums[i];
  }
  return osszegvaltozo;
}

console.log('osszegvaltozo: ' + osszeadas());


// 3. feladat

console.log('---3. feladat---');

function osszeadas2() {
  const nums = ['a', 4, 2, 2, 1, 1];
  let osszegvaltozo = 0;
  for (let i = 0; i < nums.length; i++) {
    // első verzió: if (isNaN(nums[i]) === false)
    // a feladat újraértelmezése után ezt a megoldást választottam:
    if (typeof (nums[i]) === 'number') {
      osszegvaltozo = osszegvaltozo + nums[i];
    }
    else {
      console.log('A tömb ' + i + ' indexű eleme nem number típus');
    }
  }
  return osszegvaltozo;
}

console.log('osszegvaltozo: ' + osszeadas2());

// 4. feladat

console.log('---4. feladat---');


function osszeadas3() {
  const nums = ['a', '4', 2, 2, 1, 1];
  let osszegvaltozo = 0;
  for (let i = 0; i < nums.length; i++) {
    if (typeof (nums[i]) !== 'number') {
      let konvertaltszam = 0;
      konvertaltszam = parseInt(nums[i]);
      if (isNaN(konvertaltszam) === false) {
        osszegvaltozo = osszegvaltozo + konvertaltszam;
      }
      else {
        console.log('Nem sikerült a konvertálás a ' + i + ' indexű elemnél');
      }
    }
    else {
      osszegvaltozo = osszegvaltozo + nums[i];
    }
  }
  return osszegvaltozo;
}

console.log('osszegvaltozo: ' + osszeadas3());