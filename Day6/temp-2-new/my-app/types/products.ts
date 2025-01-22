

export interface PProduct {
    
        _id: string;
        name: string;
        description: string;
        price: number;
        slug: { current: string };
        // imageUrl: string;
        image? :{
          asset : {
            _ref : string ;
            _type : "image"
          } 

        }
        quantity : number;
        tags : string;
      }