const data = {
   server: "SDM",
   port: 200,
   status: "Ok",
};

const doSomething = () => new Promise(resolve => setTimeout(() => resolve(data), 0));

const doSomethingElse = () => '200';


module.exports = {
   doSomething,
   doSomethingElse,
   data
};