import { Recognition } from './recognition.model'; 

export class RecognitionList {

    constructor(
        public interval: string,
        public recognitions: Recognition[]
    ) {
    }
}