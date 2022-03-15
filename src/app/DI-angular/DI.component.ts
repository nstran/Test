class ProductModel {
    sku!: string;
    name!: string;
    price!: number;
}

interface CartItem {
    product: ProductModel;
    quantity: number;
}

interface ICartService {
    selectedProducts: CartItem[];
    calculateTotal(): number;
    addToCart(): void;
}

// DI ngoài Angular
class CartService {
    //Nếu có thêm 1 cái nhận vào => quản lý instance bên ngoài
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
      return this.selectedProducts.reduce((total, item) => item.product.price * item.quantity + total, 0);
    }
    addToCart(): void {
      // logic here
    }
  }


export class DIComponent {
  // DIComponent inject IcartService => DIComponent dependency ICartService => DI
    constructor(private _cartService : ICartService){
    }

    test(){
        this._cartService.addToCart()
        const service = new CartService()
        const DI = new DIComponent(service)
    }
}


// => quản lý instance bên ngoài
const cartService = new CartService()
const diComponent =  new DIComponent(cartService)
console.log(diComponent)