# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tensorflow.spec.ts >> TensorFlow Playground Automation Suite >> TensorFlow Playground automation assignment
- Location: tests\tensorflow.spec.ts:8:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForFunction: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Source on GitHub" [ref=e2]:
    - /url: https://github.com/tensorflow/playground
  - banner [ref=e6]:
    - heading "Tinker With a Neural Network Right Here in Your Browser. Don’t Worry, You Can’t Break It. We Promise." [level=1] [ref=e7]: Tinker With a Neural Network Right Here in Your Browser.Don’t Worry, You Can’t Break It. We Promise.
  - generic [ref=e9]:
    - generic [ref=e10]:
      - button "replay" [ref=e11] [cursor=pointer]
      - button "pause" [ref=e13] [cursor=pointer]
      - button "skip_next" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]: Epoch
      - text: 000,021
    - generic [ref=e19]:
      - generic [ref=e20]: Learning rate
      - generic [ref=e21]:
        - combobox "Learning rate" [ref=e22]:
          - option "0.00001"
          - option "0.0001"
          - option "0.001"
          - option "0.003"
          - option "0.01"
          - option "0.03"
          - option "0.1" [selected]
          - option "0.3"
          - option "1"
          - option "3"
          - option "10"
        - text: arrow_drop_down
    - generic [ref=e23]:
      - generic [ref=e24]: Activation
      - generic [ref=e25]:
        - combobox "Activation" [ref=e26]:
          - option "ReLU"
          - option "Tanh" [selected]
          - option "Sigmoid"
          - option "Linear"
        - text: arrow_drop_down
    - generic [ref=e27]:
      - generic [ref=e28]: Regularization
      - generic [ref=e29]:
        - combobox "Regularization" [ref=e30]:
          - option "None" [selected]
          - option "L1"
          - option "L2"
        - text: arrow_drop_down
    - generic [ref=e31]:
      - generic [ref=e32]: Regularization rate
      - generic [ref=e33]:
        - combobox "Regularization rate" [ref=e34]:
          - option "0" [selected]
          - option "0.001"
          - option "0.003"
          - option "0.01"
          - option "0.03"
          - option "0.1"
          - option "0.3"
          - option "1"
          - option "3"
          - option "10"
        - text: arrow_drop_down
    - generic [ref=e35]:
      - generic [ref=e36]: Problem type
      - generic [ref=e37]:
        - combobox "Problem type" [ref=e38]:
          - option "Classification" [selected]
          - option "Regression"
        - text: arrow_drop_down
  - generic [ref=e39]:
    - generic [ref=e40]:
      - heading "Data" [level=4] [ref=e41]
      - generic [ref=e43]:
        - paragraph [ref=e44]: Which dataset do you want to use?
        - generic [ref=e45]:
          - generic "Circle" [ref=e46]:
            - generic [ref=e47] [cursor=pointer]
          - generic "Exclusive or" [ref=e48]:
            - generic [ref=e49] [cursor=pointer]
          - generic "Gaussian" [ref=e50]:
            - generic [ref=e51] [cursor=pointer]
          - generic "Spiral" [ref=e52]:
            - generic [ref=e53] [cursor=pointer]
      - generic [ref=e54]:
        - generic [ref=e55]:
          - generic [ref=e56]: "Ratio of training to test data: 50%"
          - paragraph [ref=e57]:
            - 'slider "Ratio of training to test data: 50%" [ref=e59] [cursor=pointer]': "50"
        - generic [ref=e63]:
          - generic [ref=e64]: "Noise: 5"
          - paragraph [ref=e65]:
            - 'slider "Noise: 5" [ref=e67] [cursor=pointer]': "5"
        - generic [ref=e71]:
          - generic [ref=e72]: "Batch size: 10"
          - paragraph [ref=e73]:
            - 'slider "Batch size: 10" [ref=e75] [cursor=pointer]': "10"
        - button "Regenerate" [ref=e79] [cursor=pointer]
    - generic [ref=e80]:
      - heading "Features" [level=4] [ref=e81]
      - paragraph [ref=e82]: Which properties do you want to feed in?
      - generic [ref=e83]:
        - generic [ref=e96] [cursor=pointer]
        - generic [ref=e99] [cursor=pointer]
        - generic [ref=e102] [cursor=pointer]
        - generic [ref=e105] [cursor=pointer]
        - generic [ref=e108] [cursor=pointer]
        - generic [ref=e111] [cursor=pointer]
        - generic [ref=e114] [cursor=pointer]
        - img [ref=e117]:
          - generic [ref=e118]:
            - generic [ref=e134]: X1
            - generic [ref=e137]: X2
            - generic [ref=e140]: X12
            - generic [ref=e143]: X22
            - generic [ref=e146]: X1X2
            - generic [ref=e149]: sin(X1)
            - generic [ref=e152]: sin(X2)
        - generic: This is the output from one neuron. Hover to see it larger.
        - generic: The outputs are mixed with varying weights, shown by the thickness of the lines.
        - generic [ref=e186]:
          - generic [ref=e187]:
            - button "add" [ref=e188] [cursor=pointer]
            - button "remove" [ref=e190] [cursor=pointer]
          - generic [ref=e192]: 3 neurons
        - generic [ref=e193]:
          - generic [ref=e194]:
            - button "add" [ref=e195] [cursor=pointer]
            - button "remove" [ref=e197] [cursor=pointer]
          - generic [ref=e199]: 1 neuron
    - heading "add remove 2 Hidden layers" [level=4] [ref=e201]:
      - generic [ref=e202]:
        - button "add" [ref=e203] [cursor=pointer]
        - button "remove" [ref=e205] [cursor=pointer]
      - generic [ref=e207]: "2"
      - generic [ref=e208]: Hidden layers
    - generic [ref=e210]:
      - heading "Output" [level=4] [ref=e211]
      - generic [ref=e212]:
        - generic [ref=e213]: Test loss 0.232
        - generic [ref=e214]: Training loss 0.189
      - img [ref=e223]:
        - generic [ref=e224]:
          - generic [ref=e476]:
            - generic [ref=e477]: "-6"
            - generic [ref=e479]: "-5"
            - generic [ref=e481]: "-4"
            - generic [ref=e483]: "-3"
            - generic [ref=e485]: "-2"
            - generic [ref=e487]: "-1"
            - generic [ref=e489]: "0"
            - generic [ref=e491]: "1"
            - generic [ref=e493]: "2"
            - generic [ref=e495]: "3"
            - generic [ref=e497]: "4"
            - generic [ref=e499]: "5"
            - generic [ref=e501]: "6"
          - generic [ref=e503]:
            - generic [ref=e504]: "-6"
            - generic [ref=e506]: "-5"
            - generic [ref=e508]: "-4"
            - generic [ref=e510]: "-3"
            - generic [ref=e512]: "-2"
            - generic [ref=e514]: "-1"
            - generic [ref=e516]: "0"
            - generic [ref=e518]: "1"
            - generic [ref=e520]: "2"
            - generic [ref=e522]: "3"
            - generic [ref=e524]: "4"
            - generic [ref=e526]: "5"
            - generic [ref=e528]: "6"
      - generic [ref=e530]:
        - generic [ref=e531]:
          - generic [ref=e532]: Colors shows data, neuron and weight values.
          - img [ref=e533]:
            - generic [ref=e536]:
              - generic [ref=e537]: "-1"
              - generic [ref=e539]: "0"
              - generic [ref=e541]: "1"
        - generic [ref=e543]:
          - generic [ref=e544]:
            - checkbox "Show test data"
            - text: Show test data
            - generic [ref=e546] [cursor=pointer]
            - generic [ref=e548] [cursor=pointer]
          - generic [ref=e549]:
            - checkbox "Discretize output"
            - text: Discretize output
            - generic [ref=e551] [cursor=pointer]
            - generic [ref=e553] [cursor=pointer]
  - button "keyboard_arrow_down" [ref=e554] [cursor=pointer]
  - article [ref=e556]:
    - generic [ref=e557]:
      - heading "Um, What Is a Neural Network?" [level=2] [ref=e558]
      - paragraph [ref=e559]:
        - text: It’s a technique for building a computer program that learns from data. It is based very loosely on how we think the human brain works. First, a collection of software “neurons” are created and connected together, allowing them to send messages to each other. Next, the network is asked to solve a problem, which it attempts to do over and over, each time strengthening the connections that lead to success and diminishing those that lead to failure. For a more detailed introduction to neural networks, Michael Nielsen’s
        - link "Neural Networks and Deep Learning" [ref=e560]:
          - /url: http://neuralnetworksanddeeplearning.com/index.html
        - text: is a good place to start. For a more technical overview, try
        - link "Deep Learning" [ref=e561]:
          - /url: http://www.deeplearningbook.org/
        - text: by Ian Goodfellow, Yoshua Bengio, and Aaron Courville.
    - generic [ref=e562]:
      - heading "This Is Cool, Can I Repurpose It?" [level=2] [ref=e563]
      - paragraph [ref=e564]:
        - text: Please do! We’ve open sourced it on
        - link "GitHub" [ref=e565]:
          - /url: https://github.com/tensorflow/playground
        - text: with the hope that it can make neural networks a little more accessible and easier to learn. You’re free to use it in any way that follows our
        - link "Apache License" [ref=e566]:
          - /url: https://github.com/tensorflow/playground/blob/master/LICENSE
        - text: . And if you have any suggestions for additions or changes, please
        - link "let us know" [ref=e567]:
          - /url: https://github.com/tensorflow/playground/issues
        - text: .
      - paragraph [ref=e568]:
        - text: We’ve also provided some controls below to enable you tailor the playground to a specific topic or lesson. Just choose which features you’d like to be visible below then save
        - link "this link" [ref=e569]:
          - /url: https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.06145&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false
        - text: ", or"
        - link "refresh" [ref=e570]:
          - /url: javascript:location.reload();
        - text: the page.
      - generic [ref=e571]:
        - generic [ref=e572]:
          - checkbox "Show test data" [checked]
          - text: Show test data
          - generic [ref=e574] [cursor=pointer]
          - generic [ref=e576] [cursor=pointer]
        - generic [ref=e577]:
          - checkbox "Discretize output" [checked]
          - text: Discretize output
          - generic [ref=e579] [cursor=pointer]
          - generic [ref=e581] [cursor=pointer]
        - generic [ref=e582]:
          - checkbox "Play button" [checked]
          - text: Play button
          - generic [ref=e584] [cursor=pointer]
          - generic [ref=e586] [cursor=pointer]
        - generic [ref=e587]:
          - checkbox "Step button" [checked]
          - text: Step button
          - generic [ref=e589] [cursor=pointer]
          - generic [ref=e591] [cursor=pointer]
        - generic [ref=e592]:
          - checkbox "Reset button" [checked]
          - text: Reset button
          - generic [ref=e594] [cursor=pointer]
          - generic [ref=e596] [cursor=pointer]
        - generic [ref=e597]:
          - checkbox "Learning rate" [checked]
          - text: Learning rate
          - generic [ref=e599] [cursor=pointer]
          - generic [ref=e601] [cursor=pointer]
        - generic [ref=e602]:
          - checkbox "Activation" [checked]
          - text: Activation
          - generic [ref=e604] [cursor=pointer]
          - generic [ref=e606] [cursor=pointer]
        - generic [ref=e607]:
          - checkbox "Regularization" [checked]
          - text: Regularization
          - generic [ref=e609] [cursor=pointer]
          - generic [ref=e611] [cursor=pointer]
        - generic [ref=e612]:
          - checkbox "Regularization rate" [checked]
          - text: Regularization rate
          - generic [ref=e614] [cursor=pointer]
          - generic [ref=e616] [cursor=pointer]
        - generic [ref=e617]:
          - checkbox "Problem type" [checked]
          - text: Problem type
          - generic [ref=e619] [cursor=pointer]
          - generic [ref=e621] [cursor=pointer]
        - generic [ref=e622]:
          - checkbox "Which dataset" [checked]
          - text: Which dataset
          - generic [ref=e624] [cursor=pointer]
          - generic [ref=e626] [cursor=pointer]
        - generic [ref=e627]:
          - checkbox "Ratio train data" [checked]
          - text: Ratio train data
          - generic [ref=e629] [cursor=pointer]
          - generic [ref=e631] [cursor=pointer]
        - generic [ref=e632]:
          - checkbox "Noise level" [checked]
          - text: Noise level
          - generic [ref=e634] [cursor=pointer]
          - generic [ref=e636] [cursor=pointer]
        - generic [ref=e637]:
          - checkbox "Batch size" [checked]
          - text: Batch size
          - generic [ref=e639] [cursor=pointer]
          - generic [ref=e641] [cursor=pointer]
        - generic [ref=e642]:
          - checkbox "# of hidden layers" [checked]
          - text: "# of hidden layers"
          - generic [ref=e644] [cursor=pointer]
          - generic [ref=e646] [cursor=pointer]
    - generic [ref=e647]:
      - heading "What Do All the Colors Mean?" [level=2] [ref=e648]
      - paragraph [ref=e649]: Orange and blue are used throughout the visualization in slightly different ways, but in general orange shows negative values while blue shows positive values.
      - paragraph [ref=e650]: The data points (represented by small circles) are initially colored orange or blue, which correspond to positive one and negative one.
      - paragraph [ref=e651]: In the hidden layers, the lines are colored by the weights of the connections between neurons. Blue shows a positive weight, which means the network is using that output of the neuron as given. An orange line shows that the network is assiging a negative weight.
      - paragraph [ref=e652]: In the output layer, the dots are colored orange or blue depending on their original values. The background color shows what the network is predicting for a particular area. The intensity of the color shows how confident that prediction is.
    - generic [ref=e653]:
      - heading "What Library Are You Using?" [level=2] [ref=e654]
      - paragraph [ref=e655]:
        - text: We wrote a tiny neural network
        - link "library" [ref=e656]:
          - /url: https://github.com/tensorflow/playground/blob/master/src/nn.ts
        - text: that meets the demands of this educational visualization. For real-world applications, consider the
        - link "TensorFlow" [ref=e657]:
          - /url: https://www.tensorflow.org/
        - text: library.
    - generic [ref=e658]:
      - heading "Credits" [level=2] [ref=e659]
      - paragraph [ref=e660]:
        - text: This was created by Daniel Smilkov and Shan Carter. This is a continuation of many people’s previous work — most notably Andrej Karpathy’s
        - link "convnet.js demo" [ref=e661]:
          - /url: http://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html
        - text: and Chris Olah’s
        - link "articles" [ref=e662]:
          - /url: http://colah.github.io/posts/2014-03-NN-Manifolds-Topology/
        - text: about neural networks. Many thanks also to D. Sculley for help with the original idea and to Fernanda Viégas and Martin Wattenberg and the rest of the
        - link "Big Picture" [ref=e663]:
          - /url: https://research.google.com/bigpicture/
        - text: and
        - link "Google Brain" [ref=e664]:
          - /url: https://research.google.com/teams/brain/
        - text: teams for feedback and guidance.
  - contentinfo [ref=e665]:
    - generic:
      - link:
        - /url: https://www.tensorflow.org/
      - link "Source on GitHub" [ref=e678]:
        - /url: https://github.com/tensorflow/playground
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export async function waitForEpoch(page: Page, minEpoch: number) {
  4  |   const targetEpoch = minEpoch * 1000; // 0.3 → 300
  5  | 
> 6  |   await page.waitForFunction(
     |              ^ Error: page.waitForFunction: Test timeout of 30000ms exceeded.
  7  |     (target) => {
  8  |       const el = document.querySelector('#iter-number');
  9  |       if (!el) return false;
  10 | 
  11 |       // Cast to HTMLElement so innerText is allowed
  12 |       const text = (el as HTMLElement).innerText;
  13 | 
  14 |       const cleaned = text.replace(',', '');
  15 |       const epochValue = parseFloat(cleaned);
  16 |       console.log("Epoch inside browser:", epochValue);
  17 | 
  18 |       return epochValue >= target;
  19 |     },
  20 |     targetEpoch,
  21 |     { polling: 20 } // high precision
  22 |   );
  23 | }
  24 | 
  25 | 
```