import { getRandomInt } from '../../../utils/rand'

export function genNomHalfelin(male) {
  var nom = PRENOMS_ELT_1[getRandomInt(PRENOMS_ELT_1.length)]

  if (male) nom = nom + PRENOMS_ELT_2_M[getRandomInt(PRENOMS_ELT_2_M.length)]
  else nom = nom + PRENOMS_ELT_2_F[getRandomInt(PRENOMS_ELT_2_F.length)]

  nom = nom + ' ' + NOMS[getRandomInt(NOMS.length)]
  return nom
}

const NOMS = [
  'Baidaulne',
  'Flaquebière',
  'Pommefond',
  'Graindorge',
  'Grangecoq',
  'Laurier',
  'Fleurbaie',
  'Ventretendu',
  'Natteceinte',
  'Mûrier',
  'Bonnemiche',
  'Terrier',
  'Chatonnet',
  'Tournecolline',
  'Cendrecolline',
  'Poignecanne',
  'Plantechardon',
  'Bonhomme',
  'Pommesauvage',
  'Croupe',
  'Bonquignon',
  'Pommesablé',
  'Piedfrisé',
  'Crèmecuite',
  'Repiquet',
  'Repiquet-Firquin',
  'Pâloque',
  'Fondeau',
  'Chienbaie',
  'Bascolline',
  "D'en-bas",
  'Lentilledeau',
  'Bontrot',
  'Loinchamp',
  'Vertugadin',
  'Prestedaim',
  'Fêloque',
  'Bonneforme',
  'Firquin',
  'Piedfollet',
  'Sillon',
  'Billot',
  'Seaudegomme',
  'Morfalin',
  'Acrevert',
  'Vertepomme',
  'Vertecolline',
  'Ventregrog',
  'Bouffet',
  'Gronchon',
  'Harpied',
  'Haricot',
  'Havreloque',
  'Feufilasse',
  'Sonnecor',
  'Cruchedor',
  'Lactrempe',
  'Piedalouette',
  'Blancmuguet',
  'Rondetaille',
  'Longcraie',
  'Mangetarte',
  'Moellart',
  'Préduvet',
  'Douxpré',
  'Maremoulin',
  'Bouillet',
  'Tassevalant',
  'Fluet',
  'Drôlepied',
  'Surcolline',
  'Cachepétale',
  'Souvaillant',
  'Florevive',
  'Couiglet',
  'Herbetremble',
  'Râclemoelle',
  'Perchefaite',
  'Bergedeau',
  'Freux',
  'Fripebrique',
  'Crêteblonde',
  'Bougepanse',
  'Brassepied',
  'Fauvette',
  'Rochevalant',
  'Dusuif',
  'Du grand arbre',
  'Piedmêlé',
  'Chardonbois',
  'Pointepoche',
  'Boulevin',
  'Boulepuits',
  'Blanchefleur',
  'Blanchepointe',
  'Siffleur',
  'Branchesaule',
  'Ventreuil',
  'Florevent',
  'Ridebaie',
]

const PRENOMS_ELT_1 = [
  'Bag',
  'Balf',
  'Berc',
  'Bill',
  'Bobb',
  'Bodg',
  'Bog',
  'Bom',
  'Bonn',
  'Brog',
  'Bulc',
  'Bull',
  'Bust',
  'Cam',
  'Cap',
  'Ced',
  'Chund',
  'Clog',
  'Clof',
  'Cob',
  'Cog',
  'Crum',
  'Crump',
  'Curl',
  'Dog',
  'Dod',
  'Dott',
  'Dram',
  'Drub',
  'Drog',
  'Dron',
  'Durc',
  'Elm',
  'Enn',
  'Ermin',
  'Ethan',
  'Falc',
  'Fald',
  'Falm',
  'Far',
  'Fild',
  'Flac',
  'Fogg',
  'Frit',
  'Ful',
  'Func',
  'Gaff',
  'Galb',
  'Gamm',
  'Gert',
  'Giff',
  'Gild',
  'Gon',
  'Grop',
  'Gudd',
  'Gump',
  'Ham',
  'Hal',
  'Hart',
  'Harp',
  'Jac',
  'Jas',
  'Jasp',
  'Joc',
  'Lac',
  'Lil',
  'Lob',
  'Lott',
  'Lud',
  'Lurc',
  'Mad',
  'Mag',
  'Man',
  'May',
  'Mer',
  'Mul',
  'Murc',
  'Murd',
  'Nag',
  'Nell',
  'Nobb',
  'Od',
  'og',
  'Old',
  'Pipp',
  'Podd',
  'Porc',
  'Riff',
  'Rip',
  'Rob',
  'Sam',
  'Supp',
  'Taff',
  'Talb',
  'Talc',
  'Tay',
  'Tom',
  'Wald',
  'Watt',
  'Will',
]

const PRENOMS_ELT_2_M = [
  'er',
  'in',
  'it',
  'muche',
  'o',
  'odoc',
  'panse',
  'preste',
  'riadoc',
  'regar',
  'sagace',
  'wich',
  'wit',
  'y',
]

const PRENOMS_ELT_2_F = [
  'a',
  'adell',
  'alott',
  'belle',
  'baie',
  'ella',
  'era',
  'et',
  'fleur',
  'ia',
  'ina',
  'lotta',
  'pétale',
  'pomme',
  'riela',
  'rose',
  'saule',
  'sue',
  'trude',
  'y',
]
