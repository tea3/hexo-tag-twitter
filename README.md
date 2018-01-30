# hexo-tag-twitter

Embed Twitter tweet tag plugin for [Hexo](https://github.com/hexojs/hexo).

## Introduction

This is a Hexo tag plugin which allows you to embed Twitter tweet on your blog posts.

## DEMO

[https://photo-tea.com/p/hexo-tag-twitter/](https://photo-tea.com/p/hexo-tag-twitter/)

## Installation

```
npm install hexo-tag-twitter --save
```

## Usage


```
{% twitter tweet-url %}
```

or

```
{% twitter tweet-id user-id %}
```

If you use `tweet-id` only , please edit your `_config.yml`

```
tagTwitter:
  id: tea0828
```

## FAQ

Please read here if you can not display tweet well.

[hexo-tag-twitter/issues/](https://github.com/tea3/hexo-tag-twitter/issues?utf8=%E2%9C%93&q=is%3Aissue+)

## Example

For example, if you want embed [this tweet](https://twitter.com/tea0828/status/819885806714138624) (This tweet tweet-id is *819885806714138624*), please enter the following this.

### 1. When using tweet-url

Please edit your `your-markdown.md` . This way is most simple.

```
{% twitter https://twitter.com/tea0828/status/819885806714138624 %}
```

### 2. When using tweet-id & user-id

First , please edit your `_config.yml` .

```
tagTwitter:
  id: tea0828
```

Next , Please edit your `your-markdown.md` .

```
{% twitter 819885806714138624 %}
```

Also, the above example can coding differently. Please edit your `your-markdown.md` for this way .

```
{% twitter 819885806714138624 tea0828 %}
```


## License

MIT

[Hexo]: http://hexo.io/
