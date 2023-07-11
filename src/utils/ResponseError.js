export class ResponseError extends Error{
   constructor(message = 'Something went wrong!') {
      super(message);
      this.name= 'ResponseError'
   }
}