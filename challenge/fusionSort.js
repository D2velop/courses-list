export default function sort(array, leftIndex, rightIndex )
{
  if(leftIndex < rightIndex)
  {
    let middle=Math.floor((leftIndex + rightIndex )/2);

    sort(array, leftIndex, middle );
    sort(array, middle+1, rightIndex );

    merge(array, leftIndex, middle, rightIndex );
  }

}

function merge(array, leftIndex, middle, rightIndex )
{
  let n1 = middle - leftIndex+ 1;
  let n2 = rightIndex - middle;
  let leftArray = new Array(n1);
  let rightArray = new Array(n2);

  partitionArray(array, leftArray, rightArray, leftIndex, middle);

  compareArray(array, leftArray, rightArray, leftIndex);
}


function partitionArray(array, leftArray, rightArray, leftIndex, middle)
{
  for(let i = 0; i < leftArray.length; i++)
  {
    leftArray[i] = array[leftIndex+i];
  }

  for(let j = 0; j < rightArray.length ; j++)
  {
    rightArray[j] = array[middle + 1 + j];
  }
}


function compareArray(array, leftArray, rightArray, leftIndex)
{
  let i= 0;
  let j = 0;
  let k= leftIndex;

  while(indexesLower(i, leftArray.length, j, rightArray.length))
  {
    if(islower(leftArray[i], rightArray[j]))
    {
      array[k] = leftArray[i];
      i++;
    }
    else
    {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }
  while(i < leftArray.length)
  {
    array[k] = leftArray[i];
    i++;
    k++;
  }
  while(j < rightArray.length)
  {
    array[k] = rightArray[j];
    j++;
    k++;
  }

}


function indexesLower(i, leftArrayLength, j, rightArrayLength)
{
  return i < leftArrayLength && j < rightArrayLength;
}


function islower(leftArrayElement, rightArrayElement)
 {
    return (leftArrayElement.weight < rightArrayElement.weight) || (leftArrayElement.weight === rightArrayElement.weight && leftArrayElement.label < rightArrayElement.label);
 }