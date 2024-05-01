function roll()
{   const im=document.getElementById("resultwithimage");
    const va=document.getElementById("resultwithwords");
    const input=document.getElementById("input").value;
    const values=[];
    const image=[];

    for(let i=0;i<input;i++)
    {   let value=Math.floor(Math.random()*6)+1;
        values.push(value);
        image.push(`<img src="image/dies number ${value}.png">`)
    }
    va.textContent=`Dices:${values.join(', ')}`;
    im.innerHTML=image.join('');
}