# Hashtables
<!-- Short summary or background information -->
Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.

The basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value. This is done through what we call a hash. A hash is the ability to encode the key that will eventually map to a specific location in the data structure that we can look at directly to retrieve the value.

Since we are able to hash our key and determine the exact location where our value is stored, we can do a lookup in an O(1) time complexity. This is ideal when quick lookups are required.

## Challenge
<!-- Description of the challenge -->
Implement a Hashtable with the following methods:

add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
get: takes in the key and returns the value from the table.
contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
For all methods in the hashtable,
Space complexity: O(1);
Time complexity: O(1);

## API
<!-- Description of each method publicly available in each of your hashtable -->
`HashTable.constructor(size)` : the constructor method takes an integer as size and return the hashmap with that many available buckets.
`HashTable.hash(key)`: hash method takes a key as a string and return a hash number that is between 0 and the size of the tree.
`HashTable.set(ket, value)`: the set method takes a key and a value and return the table with the object added to its corresponding hashed position.
`HashTable.get(key)`: the get method expects a key that is a string and return the object with the value of it if it exists in the map, null otherwise.
`HashTable.contains(key)`: the contains method, it takes a string that represent a key of one of the objects added to the map and returns true if it is there, false otherwise.
