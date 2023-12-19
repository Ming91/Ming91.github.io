---
title: "From Repeating Decimal to Euler's Theorem"
author: Ming
date: 2023-12-12 12:00:00 -0500
categories: [Math, Number Theory]
tags: [Math, Number Theory, Euler's Theorem]

math: true
---

This is a study note for the Euler's Theorem. Starts with a video of [@TchLiyongle](https://www.youtube.com/watch?v=4uFp7QDiEiU&t=625s).

## A Primary Problem to Repeating Decimal

### The Problem

The video starts with a problem:

> If a decimal integer number end with digit `m`. And if we move this `m` to the front of the number, the new number is `n` times of the original number. What is the smallest original number?
{: .prompt-tip }

For example `m = 4`, `n = 4`, the smallest number is `102564`.

We can use equations or vertical multiplication(which I used) to solve the problem for given `m` and `n`. But the video gives a more general solution.

### A General Solution with Repeating Decimal

The video gives a general solution using the construction of a repeating decimal. Let's note the original number as `x`, and the number of digits of `x` as `r`. We have:

 
$$
\begin{align*}
    x &= \overline{a_1a_2a_3...a_{r-1}m}& \\
    n \cdot x &= \overline{ma_1a_2a_3...a_{r-1}}&
\end{align*}
$$

$$
    \text{Then we can construct a repeating decimal of } y \text{ as:}
$$

$$
    y = 0.\overline{a_1a_2a_3...a_{r-1}ma_1a_2a_3...a_{r-1}m...} 
$$

$$
    \text{Then we can get the equation by putting } m \text{ to the front:}
$$

$$
\begin{align*}
    n \cdot y &= 0.\overline{ma_1a_2a_3...a_{r-1}ma_1a_2a_3...a_{r-1}m...} \\
    10n \cdot y &= m.\overline{a_1a_2a_3...a_{r-1}ma_1a_2a_3...a_{r-1}m...} = m + y
\end{align*}
$$

Hence:

$$
    y = \frac{m}{10n - 1}
$$

And `x` is the shortest repeating decimal of `y`, which is the $\overline{a_1a_2a_3...a_{r-1}m}$ part. 

> Here we have `10n - 1` in the divisor, so `y` is a pure repeating decimal, not a mixed decimal(which have leading zeros not repeated in following repeats, like `1/700 = 0.00142857142857..`). Because mixed repeating decimal only happens when divisor have factor of `2` or `5`.

> But the `y` with leading zeros still does not valid, like `m = 1, n = 100`, `y = 0.001001...` is not valid. `x = 001` is not a valid integer in most cases.
{: .prompt-warning}

## Multiplicative Order and Primitive Root

### A Leftover Problem

The video gives another problem in the end:

> How to know the length `r` of the repeating decimal of `1/q`?
{: .prompt-tip }

> For `p/q` we can get `r` then calculate the range of length based on the length of `p`. So we here only consider `1/q`. 

To understand the problem, we need to rephrase the problem in a more formal way:

$$
\frac{1}{q} = 0.\overline{a_1a_2a_3...a_ra1...}
$$

is equivalent to:

$$
\frac{10^r}{q} = \overline{a_1a_2a_3...a_r}.\overline{a_1...}
$$


$$
\frac{10^r - 1}{q} = \overline{a_1a_2a_3...a_r}
$$

We need to find the smallest `r` that makes `10^r - 1` a multiple of `q`. This also means $$\overline{a_1a_2a_3...a_r}$$ is the smallest `k` that satisfies `q * k + 1 = 10^r`. So we have to find the smallest `r` that:

$$
10^r \equiv 1 \pmod q
$$

### Multiplicative Order

Such `r` is called the **order** of `10` modulo `q`. And the smallest `r` is called the [multiplicative order](https://en.wikipedia.org/wiki/Multiplicative_order) of `10` modulo `q`.

>In number theory, given a positive integer `n` and an integer `a` coprime to `n`, the multiplicative order of `a` modulo `n` is the smallest positive integer `k` such that `a^k ≡ 1 (mod n)` --Wikipedia

The relationship between `a` and `n` can related to the `primitive root`.

> When gcd(a, n) != 1, we can divide both sides by gcd(a, n) to get a new equation with gcd(a, n) = 1. So we can assume gcd(a, n) = 1. This is similar to the case where `p/q` and `q != 1`. 
{: .prompt-tip }

### Primitive Root

>In modular arithmetic, a number `g` is a [primitive root modulo n](https://en.wikipedia.org/wiki/Primitive_root_modulo_n) if every number `a` coprime to `n` is congruent to a power of `g` modulo `n`. That is, g is a primitive root modulo `n` if for every integer `a` coprime to `n`, there is some integer `k` for which `g^k ≡ a (mod n)`. Such a value `k` is called the **index** or [discrete logarithm](https://en.wikipedia.org/wiki/Discrete_logarithm) of a to the base `g` modulo `n`. So `g` is a **primitive root modulo n** if and only if `g` is a generator of the [multiplicative group of integers modulo n](https://en.wikipedia.org/wiki/Multiplicative_group_of_integers_modulo_n). *--Wikipedia*

> 中文的解释：[原根](https://zh.wikipedia.org/wiki/%E5%8E%9F%E6%A0%B9)。建立在a模n的阶的概念上。如果a模n的阶k是欧拉函数φ(n)的话，那么这个数a就是n的原根。因为这说明a^1, a^2, a^3, ..., a^k mod n是一个完全剩余系（余数都不同, 且个数为所有小于n与n互质的数的个数）这就回归到了英文版的定义。
{: .prompt-info }

It's kind of hard to fully understand the definition. Let's break it down:

- `n` is the divisor in mod operation. It's the start of the problem.  Usually, we need to find a `primitive root` of it. In our case, `n = q`.
- `g` is the base in mod operation. And the `g` is the answer to the problem, the `primitive root`. In our case, `g = 10`.
- `a` is an arbitrary number that is coprime to `n`. We need to check if there is a `k` that can help us to get `g^k ≡ a (mod n)`. It's the condition that the `g` needs to satisfy.
- `k` is the power of `n`. If there is a `k` to get `a` as remainder, then `g` is the `primitive root` of `n`.

So we say `g` is a primitive root modulo `n` if for every integer `a` coprime to `n`, there is some integer `k` for which `g^k ≡ a (mod n)`.
Which is given `n > 1` and `g`:

$$
\forall a, \text{ if } \gcd(a, n) = 1, \text{ then } \exists k \text{ such that } g^k \equiv a \ (\text{mod}\ n)
$$

Now, let's introduce `Euler's Function` and `Euler's Theorem` to help us solve the problem.

## Euler's Work

### Euler's Function

> In number theory, Euler's totient function counts the positive integers up to a given integer n that are relatively prime to n. It is written using the Greek letter phi as φ(n) or ϕ(n), and may also be called Euler's phi function. --Wikipedia

For $n=p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$, the value is:

$$
\varphi(n) =n \prod_{p\mid n} \left(1-\frac{1}{p}\right)
$$

An equivalent formulation is:

$$
\varphi(n) = n \left(1 - \frac{1}{p_1}\right)\left(1 - \frac{1}{p_2}\right) \cdots \left(1 - \frac{1}{p_r}\right)
$$

> The formula means subtracting the number that have gcd with n = p1, p2, ...etc.

### Euler's Theorem

