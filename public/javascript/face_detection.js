// query url
const FACE_HOST = "https://api-us.faceplusplus.com/";

// query params for analyzing features
const FACE_FACEPP = "facepp/v3/";

// for detection 
const FACE_DETECT = FACE_FACEPP + "detect";
const FACE_COMPARE = FACE_FACEPP + "compare";
const FACE_SEARCH = FACE_FACEPP + "search";

// facetoken
const FACETOEKN = FACE_FACEPP + "face/";

// for analyzing emotions
const FACETOEKN_ANALYZE = FACETOEKN + "analyze";
const FACETOEKN_SET_USERID = FACETOEKN + "setuserid";
const FACETOEKN_GET_DETAIL = FACETOEKN + "getdetail";

//faceSet
const FACESET = FACE_FACEPP + "faceset/";
const FACESET_CREATE = FACESET + "create";
const FACESET_ADDFACE = FACESET + "addface";
const FACESET_REMOVE_FACE = FACESET + "removeface";
const FACESET_ADDFACE_ASYNC = FACESET + "async/addface";
const FACESET_REMOVE_FACE_ASYNC = FACESET + "async/removeface";
const FACEAET_TASK_QUERY = FACESET + "async/task_status";
const FACESET_UPDATE = FACESET + "update";
const FACESET_GET_DETAIL = FACESET + "getdetail";
const FACESET_GET_FACESETS = FACESET + "getfacesets";
const FACESET_DELETE = FACESET + "delete";


//human body vars
const HUMANBODY_DETECT = "humanbodypp/v1/detect";
const HUMANBODY_SEGMENT = "humanbodypp/v2/segment";
const HUMANBODY_SKELETON = "humanbodypp/v1/skeleton";
const HUMANBODY_GESTURE = "humanbodypp/beta/gesture";


const IMAGE_MERGEFACE = "imagepp/v1/mergeface";

// beta "beautify"
const FACE_BEAUTY ="facepp/beta/beautify";

const IMAGE_CN = "imagepp/";
const IMAGE_Text = IMAGE_CN + "v1/recognizetext";


 apikey = 'tofb2KC3K9WNkY2-A_VISLJVjWMQh5Df';
 apisecret = 'xMmnpBZx-r-3xNFAZJUGKXLnLAEFG4Ls';

class FACEPP {
    constructor(apikey, apisecret) {
        if (apikey == null || apisecret == null) {
            console.log('apikey or apisecret can not be null');
        }
        this.apikey = apikey;
        this.apisecret = apisecret;
        this.baseurl = FACE_HOST;
        //Face Detection!!
        this.detectFace = function (param, success, failed) {
            var url = this.baseurl + FACE_DETECT;
            this.request(url, param, success, failed);
        };
        //face comparison:
        this.compareFace = function (param, success, failed) {
            var url = this.baseurl + FACE_COMPARE;
            this.request(url, param, success, failed);
        };


        // face emotion:
        this.faceEmotion = function (param, success, failed) {
            var url = this.baseurl + FACETOEKN_ANALYZE;
            this.request(url, param, success, failed);
        };
        
        //*************faceset functions***************
        // create faceset
        this.faceSetCreate = function (param, success, failed) {
            var url = this.baseurl + FACESET_CREATE;
            this.request(url, param, success, failed);
        };
       
        this.faceSetdelete = function (param, success, failed) {
            var url = this.baseurl + FACESET_DELETE;
            this.request(url, param, success, failed);
        };
        
        this.faceSetUpdate = function (param, success, failed) {
            var url = this.baseurl + FACESET_UPDATE;
            this.request(url, param, success, failed);
        };
       
        this.faceSetQuery = function (param, success, failed) {
            var url = this.baseurl + FACESET_GET_DETAIL;
            this.request(url, param, success, failed);
        };
   
        this.faceSetGetAll = function (param, success, failed) {
            var url = this.baseurl + FACESET_GET_FACESETS;
            this.request(url, param, success, failed);
        };
        //**************faceset manipulation***************

        this.faceSearch = function (param, success, failed) {
            var url = this.baseurl + FACE_SEARCH;
            this.request(url, param, success, failed);
        };
        // add new faceset
        this.faceAdd = function (param, success, failed) {
            var url = this.baseurl + FACESET_ADDFACE;
            this.request(url, param, success, failed);
        };
       
        this.faceDelete = function (param, success, failed) {
            var url = this.baseurl + FACESET_REMOVE_FACE;
            this.request(url, param, success, failed);
        };

        this.faceAddAsnc = function (param, success, failed) {
            var url = this.baseurl + FACESET_ADDFACE_ASYNC;
            this.request(url, param, success, failed);
        };

        this.faceDelete = function (param, success, failed) {
            var url = this.baseurl + FACESET_REMOVE_FACE_ASYNC;
            this.request(url, param, success, failed);
        };
    
        this.asyncStatus = function (param, success, failed) {
            var url = this.baseurl + FACEAET_TASK_QUERY;
            this.request(url, param, success, failed);
        };
        //**************Facetoken functions***************
        // set user ID
        this.facetokenSetUserID = function (param, success, failed) {
            var url = this.baseurl + FACETOEKN_SET_USERID;
            this.request(url, param, success, failed);
        };
        //get the details of the facetoken itself
        this.facetokenGetDetail = function (param, success, failed) {
            var url = this.baseurl + FACETOEKN_GET_DETAIL;
            this.request(url, param, success, failed);
        };
        //analyze this facetoken
        this.facetokenAnalyze = function (param, success, failed) {
            var url = this.baseurl + FACETOEKN_ANALYZE;
            this.request(url, param, success, failed);
        };
        //Merge Faces
        this.mergeFace = function (param, success, failed) {
            var url = this.baseurl + IMAGE_MERGEFACE;
            this.request(url, param, success, failed);
        };

        //**************body detection functions***************
        //body detection
        this.bodyDetect = function (param, success, failed) {
            var url = this.baseurl + HUMANBODY_DETECT;
            this.request(url, param, success, failed);
        };

        this.skeletonDetect = function (param, success, failed) {
            var url = this.baseurl + HUMANBODY_SKELETON;
            this.request(url, param, success, failed);
        };

        this.bodySegent = function (param, success, failed) {
            var url = this.baseurl + HUMANBODY_SEGMENT;
            this.request(url, param, success, failed);
        };

        this.gestureRecognize = function (param, success, failed) {
            var url = this.baseurl + HUMANBODY_GESTURE;
            this.request(url, param, success, failed);
        };

        this.faceBeauty = function (param, success, failed) {
            var url = this.baseurl + FACE_BEAUTY;
            this.request(url, param, success, failed);
        };

        this.OCRIdCard = function (param, success, failed) {
            var url = this.baseurl + OCR_IDCARD;
            this.request(url, param, success, failed);
        };

        this.OCRText = function (param, success, failed) {
            var url = this.baseurl + IMAGE_Text;
            this.request(url, param, success, failed);
        };

        this.DetectScene = function (param, success, failed) {
            var url = this.baseurl + IMAGE_Object;
            this.request(url, param, success, failed);
        };

        
        this.dataURItoBlob = function (dataURI) {
            const byteString = atob(dataURI.split(',')[1]);
            const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ab], { type: mimeString });
        };
        /* POST request
         * url: Request Address
         * Requested Parameters
         */
        this.request = function (url, dic, success, failed) {
            const formData = new FormData();
            formData.append('api_key', this.apikey);
            formData.append('api_secret', this.apisecret);
            for (var key in dic) { //Traversing
                formData.append(key, dic[key]);
            }

            $.ajax({
                url: url,
                type: 'POST',
                cache: false,
                data: formData,
                processData: false,
                contentType: false,
                timeout: 20000,
            }).done(success).fail(failed);
        };
    }
}

