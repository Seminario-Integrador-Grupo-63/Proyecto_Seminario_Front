export const tableCode = "a"

function createSector(
    sector: string,
    tables: Array<any>,
) {
    return { sector, tables };
}
function createTable(
    name: string,
) {
    return { name};
}

export const tableSchema = [
    createSector('Terraza', [createTable("Mesa 1"), createTable("Mesa 2")]),
    createSector('Patio', [createTable("Mesa 3"), createTable("Mesa 4")]),
    createSector('Interior', [createTable("Mesa 5"), createTable("Mesa 6")]),
]