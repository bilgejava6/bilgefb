import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import MainService from "../../config/MainService";
/**
 * Bu kısımda hem state leri yöneteceğiz hemde fetch isteklerini burada işleyeceğiz.
 * 1- fetch işlemlerini başlatma, işlem takip ve sonlandırma şeklinde takip ederek loading durumunu kontrol edebiliyor olacağız.
 * 2- tanımlanan ve başlatılan state leri güncelleyebiliyoruz. bu işlem için 2 şekilde kullanım sunulur
 *     2.1- fetch işleminin tamamlanması ile bir setleme işlemi, (extraReducer)
 *     2.2- istebildiğinde kullanıcı isteği ile setleme işlemi. (reducers)
 * 
 */
const initialState={
    token: '',
    profile: [],
    isAuthenticated: false,
    isLoadingLogin: false,
    isLoadingRegister: false
};

const initialStateAuth={
    token: '',
    profile: [],
    isAuthenticated: false,
    isLoadingLogin: false,
    isLoadingRegister: false
};

export const fetchDoLogin = createAsyncThunk(
    /**
     * ilk olarak tanımlanan fetch için bir isim, DİKKAT!! isim benzersiz olmalıdır.
     */
    'auth/fetchdologin',
    /**
     * async, burada işlemler yürütülürken sistemin işlemeye devam etmesini sağlamak için kullanıyoruz.
     * @param {username, password} payload
     */
    async (payload)=>{
        /**
         * fetch işlemi neticesinde bir sonuç dönecek. (success[data], error[catch])
         * fetch işleminden dönen sonucuda return edeceğiz, böylece işlemin başlaması, bitmesi ya da hata vermesi durumları
         * kontrol edilebiliyor olacaktır.
         */
       const response =  await fetch(
            MainService.doLogin,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
                // body: JSON.stringify({
                //     username: payload.username,
                //     password: payload.password
                // })
            }
       ).then(res=> res.json())
       .then(data=>data)
       .catch(err=> console.log(err))
       return response;
    }
);

export const fetchDoRegister = createAsyncThunk(
    'auth/fetchdoregister',
    async (payload)=>{
        const response = await fetch(
            MainService.doRegister,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }
        ).then(res=> res.json())
        .then(data=>data)
        .catch(err=> console.log(err))
        return response;
    }
);
/**
 * yukarıda tanımlanan fetch işlemlerinin takibi, kullanıcıların stateler üzerinde yapmak istedikleri 
 * dğeişşiklik istekleri gibi aksiyonlar burada yönetilecektir.
 */
const authSlice = createSlice({
    /**
     * Slice için isim belirliyoruz. isimlendirmeyi tüm tanımlı alanlarda aynı tutar isek, kodlama yaparken zorluk çekmeyiz.
     * bu isimlendirme kullanılarak diğer sayfalardan slice içindeki statelere erişim sağlayasrak işlem yapacağız.
     */
   name: 'auth',
   /**
    * initialState, kontrol etmek istediğimiz yönettiğimiz ve dinledğimiz dataları ifade ediyor ve bu dataların başlangıç değerlerini 
    * atıyor.
    */
   //initialState: initialStateAuth
   initialState,
   /**
    * reducers, initial state içinde tanımı yapılan de default değerleri atanan dataların içeirklerini 
    * değiştirmek için kullanılır. her slice içinde kullanılma zorunululuğu yoktur. boş olarak tanımlayabilirsiniz.
    */
   reducers:{},
   /**
    * async fetch işlemler neticesinde olan değişimlerde yapıalcak işlemleri tanımlarız. burada 3 işlem olmaktadır:
    *  1- pending, fetch işleminin ilk başlatıldığı an ve beklemede olduğumuz zaman dilimidir.
    *  2- fulfilled, fetch işleni başarı ile tamamlandığı zaman yapıalcak işlemleri tanımlıyoruz.
    *  3- rejected,  fetch işlemi catch ile sonuçlanınca oluşan durumda yapılacakları tanımlyoruz.
    * burada dikkat ediniz her bir fetch işlemi yani AsyncThunk için 3 durum oluşur. yani 2 işleminiz var ise 6 durum oluşur.
    */
   extraReducers:(build)=>{
        build.addCase(fetchDoLogin.pending,(state)=>{
            state.isLoadingLogin=true;
        });
        build.addCase(fetchDoLogin.fulfilled,(state,action)=>{
           
            state.isLoadingLogin = false;
            if(action.payload.statusCode===200){
                state.isAuthenticated = true;
                state.token = action.payload.token;
               // localStorage.setItem('TOKEN', action.payload.token);
            }else{
                alert(action.payload.message);
            }
         
        });
        build.addCase(fetchDoLogin.rejected,(state)=>{
            state.isLoadingLogin=false;
        });
   }

});

export default authSlice.reducer;