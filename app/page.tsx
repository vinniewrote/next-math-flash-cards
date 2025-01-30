export default function Home() {
  const flashCardBundle = [];
  const solutionBundle = [];
  function generateMultiplicationTable(number) {
    for (let i = 1; i <= 12; i++) {
      flashCardBundle.push({
        number: number,
        mathIndex: i,
        solution: number * i,
      });
    }
    console.log(flashCardBundle);
  }
  generateMultiplicationTable(11);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <button>
          <p>Start Practicing</p>
        </button>

        <div className="flashcardWindow h-auto w-80 flex flex-row overflow-hidden p-4">
          {flashCardBundle?.map((probnum, j) => (
            <div key={j} className="flashProblem flex flex-col p-8 mr-10">
              <div className="problem1 text-9xl text-right">
                {probnum?.number}
              </div>
              <div className="opProblem flex flex-row justify-between">
                <div className="problemOperator text-6xl leading-8">X</div>
                <div className="problem2 text-9xl">{probnum?.mathIndex}</div>
              </div>
              <div className="equals border-solid border-2 border-white mb-4" />
              <div className="problemSolutions flex flex-row gap-5">
                <div className="solution-temp solution1 p-2 border-2 border-solid border-white rounded-lg">
                  {Math.floor(Math.random() * (probnum?.solution + 12))}
                </div>
                <div className="solution-temp solution1 p-2 border-2 border-solid border-white rounded-lg">
                  {probnum?.solution}
                </div>
                <div className="solution-temp solution1 p-2 border-2 border-solid border-white rounded-lg">
                  {Math.floor(Math.random() * (probnum?.solution - 10))}
                </div>
                <div className="solution-temp solution1 p-2 border-2 border-solid border-white rounded-lg">
                  {Math.floor(Math.random() * (probnum?.solution + 12))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
