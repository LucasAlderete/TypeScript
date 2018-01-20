interface IOption{
    url,
    method : string;
}

let ajax = {} as IOption;
ajax.url = "https://lucasalderete.com";
ajax.method = "POST";