function eufaEuro2016(teams,scores){
    const [team1,team2] = teams;
    const [score1,score2] = scores;
    if(score1>score2){
        return `At this match ${team1} - ${team2}, ${team1} is won`;
    } else if(score2>score1){
     return `At this match ${team1} - ${team2}, ${team2} is won`;
    }else {
        return `At this match ${team1} - ${team2}, is draw`
    }
}

console.log(eufaEuro2016(['France','Rwanda'],[2,2]));
console.log(eufaEuro2016(['senegal','Germany'],[0,2]));
console.log(eufaEuro2016(['Portugal','Japan'],[4,1]));