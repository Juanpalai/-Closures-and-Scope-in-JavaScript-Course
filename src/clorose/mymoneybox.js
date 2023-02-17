// function moneyBox(coins)
// {
//     let saveCoint = 0;
//     saveCoint += coins;
//     console.log(`MoneyBox ${saveCoint}`)
    
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox()
{
    let saveCoins = 0;
    function countCoins(coins)
    {
        saveCoins += coins;
        console.log(`MoneBox ${saveCoins}`)
    }
    return countCoins;
}

const MoneyBox = moneyBox();
MoneyBox(5);
MoneyBox(5);
MoneyBox(15);

const MoneBoxAna = moneyBox();
MoneBoxAna(5);
MoneBoxAna(20);