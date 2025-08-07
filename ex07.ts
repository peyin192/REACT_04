const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const processInput = (input: string | number | boolean): void => {
  if (typeof input === "string") {
    if (/^\d+$/.test(input)) {
      const num = parseInt(input);
      console.log(num * num);
    } else {
      const charCount = input.replace(/[^a-zA-Z]/g, "").length;
      console.log(`${charCount} ký tự chữ cái`);
    }
  } else if (typeof input === "number") {
    if (isPrime(input)) {
      console.log("Là số nguyên tố");
    } else {
      console.log("Không phải số nguyên tố");
    }
  } else if (typeof input === "boolean") {
    if (input) {
      console.log("Giá trị là true - tiến hành xử lý");
    } else {
      console.log("Giá trị là false - dừng xử lý");
    }
  }
};
