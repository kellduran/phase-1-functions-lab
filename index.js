// Need distance between HQ location and pickup location in blocks. 
//HQ located on 42nd street, pick-up location is unknown and variable

function distanceFromHqInBlocks(blocks){
  
     if (blocks >= 42) {
        return (blocks - 42);
    }
    else {
        return (42 - blocks)
    };

}
