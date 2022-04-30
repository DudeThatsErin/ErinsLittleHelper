const { MessageEmbed } = require('discord.js');
const { ButtonPaginator } = require('@psibean/discord.js-pagination');

module.exports = {
  name: 'villagers',
  description: 'View a list of all of the villagers names.',
  usage: '/villagers',
  cooldown: '30',
  async execute (interaction, client) {
    const pages = [];
		const roleColor =
			interaction.guild.me.displayHexColor === "#000000"
				? "#ffffff"
				: interaction.guild.me.displayHexColor;

        const embed = new MessageEmbed()
          .setColor(roleColor)
          .setTitle('These are the villagers you can request')
          .setDescription('If you are having issues requesting villagers\nit could be because you do not have them typed like this.')
          .addFields(
            {
              name: 'Villager\'s names starting with A:',
              value: '```markdown\nAce\nAdmiral\nAgentS\nAgnes\nAl\nAlfonso\nAlice\nAlli\nAmelia\nAnabelle\nAnchovy\nAngus\nAnicotti\nAnkha\nAnnalisa\nAnnalise\nAntonio\nApollo\nApple\nAstrid\nAudie\nAurora\nAva\nAvery\nAxel```'
            }
          )
          .setFooter({ text: 'If you would like to request a villager\nrun !request [villager\'s name] Happy Animal Crossing!' });

          const embed1 = new MessageEmbed()
          .setColor(roleColor)
          .setTitle('These are the villagers you can request')
          .setDescription('If you are having issues requesting villagers\nit could be because you do not have them typed like this.')
          .addFields(
            {
              name: 'Villager\'s names starting with B:',
              value: '```markdown\nBaabara\nBam\nBangle\nBarold\nBea\nBeardo\nBeau\nBecky\nBella\nBenedict\nBenjamin\nBertha\nBiff\nBigTop\nBill\nBilly\nBiskit\nBitty\nBlaire\nBlanche\nBluebear\nBob\nBonbon\nBones\nBoomer\nBoots\nBoris\nBoyd\nBree\nBroccolo\nBroffina\nBruce\nBubbles\nBuck\nBunnie\nButch\nBuzz```'
            }
          )
          .setFooter({ text: 'If you would like to request a villager\nrun !request [villager\'s name] Happy Animal Crossing!' });

          const embed2 = new MessageEmbed()
          .setColor(roleColor)
          .setTitle('These are the villagers you can request')
          .setDescription('If you are having issues requesting villagers\nit could be because you do not have them typed like this.')
          .addFields(
            {
              name: 'Villager\'s names starting with C:',
              value: '```markdown\nCally\nCamofrog\nCanberra\nCandi\nCarmen\nCaroline\nCarrie\nCashmere\nCelia\nCephalobot\nCesar\nChabwick\nChadder\nChai\nCharlise\nChelsea\nCheri\nCherry\nChester\nChevre\nChief\nChops\nChow\nChrissy\nClaude\nClaudia\nClay\nCleo\nClyde\nCoach\nCobb\nCoco\nCole\nColton\nCookie\nCousteau\nCranston\nCroque\nCube\nCurlos\nCurly\nCurt\nCyd\nCyrano```'
            }
          )
          .setFooter({ text: 'If you would like to request a villager\nrun !request [villager\'s name] Happy Animal Crossing!' });

          const embed3 = new MessageEmbed()
          .setColor(roleColor)
          .setTitle('These are the villagers you can request')
          .setDescription('If you are having issues requesting villagers\nit could be because you do not have them typed like this.')
          .addFields(
            {
              name: 'Villager\'s names starting with D & E:',
              value: '```markdown\nDaisy\nDeena\nDeirdre\nDel\nDeli\nDerwin\nDiana\nDiva\nDizzy\nDobie\nDoc\nDom\nDora\nDotty\nDrago\nDrake\nDrift\nEd\nEgbert\nElise\nEllie\nElmer\nEloise\nElvis\nErik\nEtoile\nEugene\nEunice```'
            }
          )
          .setFooter({ text: 'If you would like to request a villager\nrun !request [villager\'s name] Happy Animal Crossing!' });

          const embed4 = new MessageEmbed()
          .setColor(roleColor)
          .setTitle('These are the villagers you can request')
          .setDescription('If you are having issues requesting villagers\nit could be because you do not have them typed like this.')
          .addFields(
            {
              name: 'Villager\'s names starting with F & G:',
              value: '```markdown\nFaith\nFang\nFauna\nFelicity\nFilbert\nFlip\nFlo\nFlora\nFlurry\nFrancine\nFrank\nFreckles\nFrett\nFreya\nFriga\nFrita\nFrobert\nFushia\nGabi\nGala\nGaston\nGayle\nGenji\nGigi\nGladys\nGloria\nGoldie\nGonzo\nGoose\nGraham\nGreta\nGrizzly\nGroucho\nGruff\nGwen```'
            }
          )
          .setFooter({ text: 'If you would like to request a villager\nrun !request [villager\'s name] Happy Animal Crossing!' });

          const embed5 = new MessageEmbed()
          .setColor(roleColor)
          .setTitle('These are the villagers you can request')
          .setDescription('If you are having issues requesting villagers\nit could be because you do not have them typed like this.')
          .addFields(
            {
              name: 'Villager\'s names starting with H, I & J:',
              value: '```markdown\nHamlet\nHamphrey\nHans\nHarry\nHazel\nHenry\nHippeux\nHopkins\nHopper\nHornsby\nHuck\nHugh\nIggly\nIke\nIone\nJacob\nJacques\nJambette\nJay\nJeremiah\nJitters\nJoey\nJudy\nJulia\nJulian\nJune```'
            }
          )
          .setFooter({ text: 'If you would like to request a villager\nrun !request [villager\'s name] Happy Animal Crossing!' });

          const embed6 = new MessageEmbed()
          .setColor(roleColor)
          .setTitle('These are the villagers you can request')
          .setDescription('If you are having issues requesting villagers\nit could be because you do not have them typed like this.')
          .addFields(
            {
              name: 'Villager\'s names starting with K & L:',
              value: '```markdown\nKabuki\nKatt\nKeaton\nKen\nKetchup\nKevin\nKid Cat\nKidd\nKiki\nKitt\nKitty\nKlaus\nKnox\nKody\nKyle\nLeonardo\nLily\nLimberg\nLionel\nLobo\nLolly\nLopez\nLouie\nLucha\nLucky\nLucy\nLyman```'
            }
          )
          .setFooter({ text: 'If you would like to request a villager\nrun !request [villager\'s name] Happy Animal Crossing!' });

          const embed7 = new MessageEmbed()
          .setColor(roleColor)
          .setTitle('These are the villagers you can request')
          .setDescription('If you are having issues requesting villagers\nit could be because you do not have them typed like this.')
          .addFields(
            {
              name: 'Villager\'s names starting with M & N:',
              value: '```markdown\nMac\nMaddie\nMaelle\nMaggie\nMallary\nMaple\nMarchel\nMarcie\nMarina\nMarlo\nMarshal\nMarty\nMathilda\nMegan\nMelba\nMerengue\nMerry\nMidge\nMint\nMira\nMiranda\nMitzi\nMoe\nMolly\nMonique\nMonty\nMoose\nMott\nMuffy\nMurphy\nNan\nNana\nNaomi\nNate\nNibbles\nNorma```'
            }
          )
          .setFooter({ text: 'If you would like to request a villager\nrun !request [villager\'s name] Happy Animal Crossing!' });

          const embed8 = new MessageEmbed()
          .setColor(roleColor)
          .setTitle('These are the villagers you can request')
          .setDescription('If you are having issues requesting villagers\nit could be because you do not have them typed like this.')
          .addFields(
            {
              name: 'Villager\'s names starting with O, P, & Q:',
              value: '```markdown\nOctavian\nOHare\nOlive\nOlivia\nOpal\nOzzie\nPancetti\nPango\nPaolo\nPapi\nPashima\nPate\nPatty\nPaula\nPeaches\nPeanut\nPecan\nPeewee\nPeggy\nPekoe\nPenelope\nPetri\nPhil\nPhoebe\nPierce\nPietro\nPinky\nPiper\nPippy\nPlucky\nPompom\nPoncho\nPoppy\nPortia\nPrince\nPuck\nPuddles\nPudge\nPunchy\nPurrl\nQueenie\nQuilson\nQuinn```'
            }
          )
          .setFooter({ text: 'If you would like to request a villager\nrun !request [villager\'s name] Happy Animal Crossing!' });

          const embed9 = new MessageEmbed()
          .setColor(roleColor)
          .setTitle('These are the villagers you can request')
          .setDescription('If you are having issues requesting villagers\nit could be because you do not have them typed like this.')
          .addFields(
            {
              name: 'Villager\'s names starting with R & S:',
              value: '```markdown\nRaddle\nRasher\nRaymond\nRenee\nRaneigh\nRex\nRhonda\nRibbot\nRicky\nRilla\nRio\nRizzo\nRoald\nRobin\nRocco\nRocket\nRod\nRodeo\nRodney\nRolf\nRooney\nRory\nRoscoe\nRosie\nRoswell\nRowan\nRuby\nRudy\nSally\nSasha\nSamson\nSandy\nSavannah\nScoot\nShari\nSheldon\nShep\nSherb\nShino\nSkye\nSly\nSnake\nSnooty\nSoleil\nSparro\nSpike\nSpork\nSprinkle\nSprocket\nStatic\nStella\nSterling\nStinky\nStitches\nStu\nSydney\nSylvana\nSylvia```'
            }
          )
          .setFooter({ text: 'If you would like to request a villager\nrun !request [villager\'s name] Happy Animal Crossing!' });

          const embed10 = new MessageEmbed()
          .setColor(roleColor)
          .setTitle('These are the villagers you can request')
          .setDescription('If you are having issues requesting villagers\nit could be because you do not have them typed like this.')
          .addFields(
            {
              name: 'Villager\'s names starting with T, U, & V:',
              value: '```markdown\nTabby\nTad\nTammi\nTammy\nTangy\nTank\nTasha\nT-Bone\nTeddy\nTex\nTia\nTiansheng\nTIffany\nTimbra\nTipper\nToby\nTom\nTruffles\nTucker\nTutu\nTwiggy\nTybalt\nUrsala\nVelma\nVesta\nVic\nVictoria\nViolet\nVivian\nVladimir```'
            }
          )
          .setFooter({ text: 'If you would like to request a villager\nrun !request [villager\'s name] Happy Animal Crossing!' });

          const embed11 = new MessageEmbed()
          .setColor(roleColor)
          .setTitle('These are the villagers you can request')
          .setDescription('If you are having issues requesting villagers\nit could be because you do not have them typed like this.')
          .addFields(
            {
              name: 'Villager\'s names starting with W, Y, & Z:',
              value: '```markdown\nWade\nWalker\nWalt\nWartJr\nWeber\nWendy\nWhitney\nWillow\nWinnie\nWolfgang\nYuka\nZell\nZoe\nZucker```'
            }
          )
          .setFooter({ text: 'If you would like to request a villager\nrun !request [villager\'s name] Happy Animal Crossing!' });

        pages.push(embed);
        pages.push(embed1);
        pages.push(embed2);
        pages.push(embed3);
        pages.push(embed4);
        pages.push(embed5);
        pages.push(embed6);
        pages.push(embed7);
        pages.push(embed8);
        pages.push(embed9);
        pages.push(embed10);
        pages.push(embed11);

      const buttonPaginator = new ButtonPaginator(interaction, { pages });
      await buttonPaginator.send();
  }
}
