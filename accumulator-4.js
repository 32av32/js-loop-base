let arr = ['Адаев', 'Балаев', 'Вагапов', 'Дааев', 'Гадаев', 'Жукаев', 'Акаев', 'Закаев', 'Исаев', 'Калаев']

let accumulator = []

for (let i of arr) {
    if (i[0].toLowerCase() === 'а') {
        accumulator.push(i)
    }
}