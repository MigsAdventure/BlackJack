const _ =require('lodash');

let Deck = {
  wholeDeck: [
    [2, '0B1CC7FYwQnMwN0stN01ZQms3S1E'],[2, '0B1CC7FYwQnMwNmxPYTltblNzZjA'],[2, '0B1CC7FYwQnMwbjZLWXV3SHc5cDA'],[2, '0B1CC7FYwQnMwWElxYTdJN1laR2s'],
    [3, '0B1CC7FYwQnMwaFBnUmNLcjFLS0U'],[3, '0B1CC7FYwQnMwOHZiLWhIcTBLNkk'],[3, '0B1CC7FYwQnMwYmdRbi1PYjVfbG8'],[3, '0B1CC7FYwQnMwY284WjQ3bEt1MDA'],
    [4, '0B1CC7FYwQnMwRHFOWWdJcHJ5MXM'],[4, '0B1CC7FYwQnMwZ1RFT0t0a0xjYmc'],[4, '0B1CC7FYwQnMwQ1pvS0h0b0dZVWc'],[4, '0B1CC7FYwQnMwazlHVTUxaFFPMW8'],
    [5, '0B1CC7FYwQnMwZUdvbndncG5tb2s'],[5, '0B1CC7FYwQnMwYUU0YTEtVFMxQms'],[5, '0B1CC7FYwQnMwN1YydUdYX2NaMWM'],[5, '0B1CC7FYwQnMwRy1Rc0pQMWN0UzA'],
    [6, '0B1CC7FYwQnMwa3NuV3BGSlZsMkk'],[6, '0B1CC7FYwQnMwQzNWdVFhVkgwSm8'],[6, '0B1CC7FYwQnMwaEt6VHhib1BFMFU'],[6, '0B1CC7FYwQnMwWjJORV9zcU03MHc'],
    [7, '0B1CC7FYwQnMwT1JpSUpCN0xlamc'],[7, '0B1CC7FYwQnMwb0JvQThMUDBpdEk'],[7, '0B1CC7FYwQnMwWDdsSVVqdGwwejA'],[7, '0B1CC7FYwQnMwX2NGbGVUaHlIWkU'],
    [8, '0B1CC7FYwQnMwTHRpSHlTVEpKS1U'],[8, '0B1CC7FYwQnMwYVVXYlRNR0hFVGc'],[8, '0B1CC7FYwQnMwMVhkVWFHS01rMTQ'],[8, '0B1CC7FYwQnMwNENyanlNX1VmX2s'],
    [9, '0B1CC7FYwQnMwdnEyQVF1eGFnSlE'],[9, '0B1CC7FYwQnMwbmRtakRyLUhZMEk'],[9, '0B1CC7FYwQnMwUTVYc29YcnVkdDA'],[9, '0B1CC7FYwQnMwbnJMc0NSRkNxWm8'],
    [10, '0B1CC7FYwQnMwU0FST29jR3VZbk0'],[10, '0B1CC7FYwQnMwcW5aTDNfYnc5dGM'],[10, '0B1CC7FYwQnMwWG1zb3EwZ2Z0Rlk'],[10, '0B1CC7FYwQnMwNmNhbFNvZVdudkU'],
    [10, '0B1CC7FYwQnMwejg5VC1Fd3FsbDA'],[10, '0B1CC7FYwQnMwN1pkeWRPeU9maXc'],[10, '0B1CC7FYwQnMwMEk4SFRUY2xXOEU'],[10, '0B1CC7FYwQnMwZWVHaklfVV9yTEU'],
    [10, '0B1CC7FYwQnMwRTFEZHJ3dGlNOWs'],[10, '0B1CC7FYwQnMwZnQ1dU1GT2l2YUE'],[10, '0B1CC7FYwQnMwTTJrNE5GMVhlNzQ'],[10, '0B1CC7FYwQnMwNFA2OWxmcTJzcUE'],
    [1, '0B1CC7FYwQnMweUtpWWMzbWIyYUE'],[1, '0B1CC7FYwQnMwRVU2VmxNNldGeFE'],[1, '0B1CC7FYwQnMwX0pTNkwtRkxPR1U'],[1, '0B1CC7FYwQnMwZjUxNGhmXzg3SGc']
  ]
}

Deck = _.shuffle(Deck);
console.log(Deck);

module.exports = Deck;
// if variable card is an element of the wholeDeck array:
// `http://drive.google.com/uc?export=view&id=${card[1]}` --> link to card image.
// card[0] is point worth of the card
// {import Cards from '../Cards.js'} inside the store, to modularize this huge chunk of code in a separate Cards.js file (not necessary)