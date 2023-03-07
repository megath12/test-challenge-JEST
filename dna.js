/* Write a function that takes in a DNA string (for example 'CTAGGGTA') and returns a new string with any non-canonical DNA base values removed. Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. Make the function case sensitive - meaning 'c' (lower case) should be removed from the string, but 'C' (upper case) is a good value and should remain. If the DNA string is empty, just return an empty string. */


//const gro="CTGAFcfsdfTA"

function dna(cad){
    if(dna=""){
        return ""
    }
    else{
        let nc=[],ra,c=0;
        for(let k=0;k<cad.length;k++){
            let ob=cad[k];
            switch(true){
                case ob=='A' || ob =='G' || ob =='C' || ob=='T':
                    nc[c]=ob;
                    c++
                    break;
                default:
                    nc[c]='A';
                    c++
            } 
        }
        return nc.join('');
    }
}

//console.log(dna(""))

module.exports=dna


/*                 ra=Math.random();
                if(ra>=0.75){
                    nc[k]='A'
                }
                else if(ra<0.75&&ra>=0.5){
                    nc[k]='G'
                }
                else if(ra<0.5&&ra>=0.25){
                    nc[k]='C'
                }
                else{
                    nc[k]='T'
                }*/