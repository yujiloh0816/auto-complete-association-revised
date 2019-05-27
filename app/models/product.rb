class Product < ApplicationRecord
  belongs_to :category

# try() nilでない場合にのみオブジェクトのメソッドを呼び出したい場合
# ゲッター
# _form.html.erbの読み込みで呼び出される
# edit と new でフォームが呼び出されるため 存在の確認が必要
  def category_name
    category.try(:name)
  end

# セッター
# _form.html.erbの読み込みと送信時で呼び出される
# モデル.find_by_カラム名(検索する値)
# カラム名を指定して最初の1件を取得(find_by_colum)
  def category_name=(name)
    self.category = Category.find_by_name(name) if name.present?
  end
end

# 属性参照
# https://docs.ruby-lang.org/ja/latest/doc/spec=2foperator.html
#
# class C
#   def foo
#     @foo
#   end
#   def foo=( v )
#     @foo = v
#   end
# end
# c = C.new
# c.foo = 5   # c.foo=( 5 ) のように変換される
# で
# p c.foo     # => 5
