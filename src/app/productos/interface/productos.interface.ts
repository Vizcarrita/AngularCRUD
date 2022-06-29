export interface Producto{
    id?:     string;
    name:   string;
    categoria: Categoria;
}

export enum Categoria {
    Bebidas = "Bebidas",
    Tecnologia = "Tecnologia",
    Ropa = "Ropa",
    Musica = "Musica",
}