export const inc = () => ({type: "INC"});                                             //екшн кріейтор функції
export const dec = () => ({type: "DEC"});
export const rnd = () => {
    return {type: "RND", value: Math.floor(Math.random() * 10)}};
export const del = () => ({type: "DEL"});                                                                                               
