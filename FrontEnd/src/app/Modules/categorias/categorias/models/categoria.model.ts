export interface Subcategoria {
    _id: string;
    nombre: string;
    temas: string[];
    inactivo: boolean;
  }
  
  export interface Categoria {
    _id: string;
    nombre: string;
    subcategorias: Subcategoria[];
    inactivo: boolean;
  }
  
  export interface CategoriasResponse {
    categorias: Categoria[];
  }
  