
class HelloWorldService {

    public async read() : Promise<string> {

        try {
            return 'Hello';

        }catch(err) {
            throw new Error("Unable to get list post")
        }
    }
}

export default HelloWorldService