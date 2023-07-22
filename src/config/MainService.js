import RestApi from './RestApi';
const MainService ={
    doLogin: RestApi.mainService+'/user/login',
    doRegister: RestApi.mainService+'/user/register',
    createPost: RestApi.mainService+'/post/createPost',
    getProfileByToken: RestApi.mainService+'/user/getProfileByToken',
    uploadFile: RestApi.mainService+'/post/uploadfile',
    getNewUserList: RestApi.mainService+'/user/newUserList',
    getPostList: RestApi.mainService+'/post/getPosts',
    getProfile: RestApi.mainService+'/user/getProfile',
    updateProfile: RestApi+'/user/saveProfile',
    logout: RestApi.mainService+'/user/logout',
    createComment: RestApi.mainService+'/comment/createcomment',
    getCommentByPostId: RestApi.mainService+'/comment/getallcommentbypostid',
    getOnlineUserList: RestApi.mainService+'/online/onlineUsers'
};
export default MainService;