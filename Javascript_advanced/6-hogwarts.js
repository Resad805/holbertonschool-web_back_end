class StudentHogwarts {
    #privateScore = 0;
    name = null;
    #changeScoreBy(points) {
        this.#privateScore += points;
        return this.#privateScore;
    }
    setName(newName){
        this.name = newName;
        return newName;
    }
    rewardStudent(){
        this.#changeScoreBy(1); 
    }
    penalizeStudent(){
        this.#changeScoreBy(-1);
    }
    getScore(){
        return `${this.name}: ${this.#privateScore}`;
    }

}
const harry = new StudentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = new StudentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
